const mongoose = require("mongoose");

mongoose.connect(process.env.DB);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

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
