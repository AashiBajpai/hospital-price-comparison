const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema({
  name: String,
  location: String,
  rating: Number,
  services: [
    {
      name: String,
      price: Number
    }
  ]
});
module.exports = mongoose.model("Hospital", hospitalSchema);
