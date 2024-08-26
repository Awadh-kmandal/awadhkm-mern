const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const Service = new mongoose.model("Service", serviceSchema);
module.exports = Service;
