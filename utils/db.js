const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connection Successfull..");
  } catch (error) {
    console.log("Database connection Failed", error);
  }
};

module.exports = connectDB;
