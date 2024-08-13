// backend/db.js
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ankitmalik84:74AN9JGRAO0PHl05@cluster0.bcntccx.mongodb.net/intern"
);

const db = mongoose.connection;

// Event listener for successful connection
db.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

// Event listener for connection error
db.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
