// backend/routes/user.js
const express = require("express");
const zod = require("zod");
const router = express.Router();
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const signupSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

// Signup route
router.post("/signup", async (req, res) => {
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({ message: "Invalid input" });
  }

  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(409).json({ message: "Email already taken" });
  }

  const user = await User.create({
    email: req.body.email,
    password: req.body.password,
  });

  const token = jwt.sign({ userId: user._id }, JWT_SECRET);

  res.status(201).json({ message: "User created successfully", token });
});

// Signin route
router.post("/signin", async (req, res) => {
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({ message: "Invalid input" });
  }

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET);

  res.status(200).json({ message: "User signed in successfully", token });
});

module.exports = router;
