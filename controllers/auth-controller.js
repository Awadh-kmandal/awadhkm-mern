const User = require("../models/user-model");
const Blogs = require("../models/blogs-model");
//Register page
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email Already Exist" });
    }
    const userCreated = await User.create({ username, email, phone, password });
    res.status(201).json({
      msg: "Registration successfull..",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

//Login page
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Email Address" });
    }
    const user = await userExist.comparePassword(password);
    if (user) {
      res.status(200).json({
        msg: "Login successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

// to get user data
const user = (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from user route ${error}`);
  }
};

module.exports = { register, login, user };
