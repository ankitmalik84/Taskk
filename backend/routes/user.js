const express = require("express");
const zod = require("zod");
const bcrypt = require("bcrypt");
const { User } = require("../db");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Validation
const Schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

// Sign up route
router.post("/signup", async (req, res) => {
  const { success, error } = Schema.safeParse(req.body);
  if (!success) {
    return res
      .status(400)
      .json({ message: "Invalid input", errors: error.errors });
  }

  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email: email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    res
      .status(201)
      .json({ message: "User created successfully", token, user: user.email });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Sign in route
router.post("/signin", async (req, res) => {
  const { success, error } = Schema.safeParse(req.body);
  if (!success) {
    return res
      .status(400)
      .json({ message: "Invalid input", errors: error.errors });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    res
      .status(200)
      .json({
        message: "User signed in successfully",
        token,
        user: user.email,
      });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
