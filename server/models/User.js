const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  mob: String,
  location: String,
});

module.exports = mongoose.model("User", UserSchema);
