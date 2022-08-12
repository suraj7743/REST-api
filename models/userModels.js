const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must include a name "],
  },
  age: {
    type: Number,
    required: [true, "must include a age "],
  },
  location: {
    type: String,
    required: [true, "Must include a location "],
  },
});
module.exports = userModel = mongoose.model("user", userSchema);
