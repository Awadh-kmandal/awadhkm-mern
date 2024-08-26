const users = require("../models/usersSchema");
const moment = require("moment");

//Register page
const register = async (req, res) => {
  const { filename } = req.file;

  const { fname } = req.body;

  if (!fname || !filename) {
    res.status(401).json({ status: 401, message: "fill all the data" });
  }

  try {
    const date = moment(new Date()).format("YYYY-MM-DD");

    const userdata = new users({
      fname: fname,
      imgpath: filename,
      date: date,
    });

    const finaldata = await userdata.save();

    res.status(201).json({ status: 201, finaldata });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};

module.exports = { register };
