const express = require("express");
const zod = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { client } = require("../db");

const userRouter = express.Router();

const signupSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

userRouter.post("/signup", async (req, res) => {
  const { success, error } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({ message: error.message });
  }

  const { email, password } = req.body;

  try {
    const { rows: existingUsers } = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (existingUsers.length > 0) {
      return res.status(409).json({ message: "Email already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await client.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, hashedPassword]
    );
    const user = result.rows[0];

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    res
      .status(201)
      .json({ message: "User created successfully", token, user: user.email });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { success, error } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({ message: error.message });
  }

  const { email, password } = req.body;

  try {
    const { rows: users } = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    const user = users[0];
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    res.status(200).json({
      message: "User signed in successfully",
      token,
      user: user.email,
    });
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = userRouter;
