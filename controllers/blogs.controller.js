const Blogs = require("../models/blogs-model");

// to get posted data
const blogAll = async (req, res) => {
  try {
    const blogs = await Blogs.find();
    if (!blogs || blogs.lenth === 0) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = blogAll;
