const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

const UserModel = mongoose.model("user", userScheme);

module.exports = UserModel;
