const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Blogs = require("../models/blogs-model");
const Services = require("../models/service-model");
const getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users || users.lenth === 0) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
//contact actions
const getAllcontact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.lenth === 0) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contacts delete succesfully" });
  } catch (error) {
    next(error);
  }
};

//users details
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;
    const updateData = await User.updateOne(
      { _id: id },
      {
        $set: updateUserData,
      }
    );
    return res.status(200).json(updateData);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User delete succesfully" });
  } catch (error) {
    next(error);
  }
};

// Create blogs post

const blogPost = async (req, res) => {
  try {
    const response = req.body;
    await Blogs.create(response);
    return res.status(200).json({ message: "Blog post successfully" });
  } catch (error) {
    return res.status(200).json({ message: "Blog post  unsuccessfully" });
  }
};

// Create Services post

const createServices = async (req, res) => {
  try {
    const response = req.body;
    await Services.create(response);
    return res.status(200).json({ message: "Services create successfully" });
  } catch (error) {
    return res.status(200).json({ message: "Services create  unsuccessfully" });
  }
};

module.exports = {
  getAllusers,
  getAllcontact,
  deleteUserById,
  getUserById,
  updateUserById,
  blogPost,
  createServices,
  deleteContactById,
};
