const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
  username: String,
  password: String,
  created_at: { type: Date, default: new Date() },
  role: { type: String, default: "CUSTOMER" },
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("Users", userSchema);
