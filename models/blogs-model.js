const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  postby: {
    type: String,
    require: true,
  },
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
  videolink: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
  },
});

const Blogs = new mongoose.model("Blogs", blogSchema);
module.exports = Blogs;
