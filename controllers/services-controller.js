const Services = require("../models/service-model");

// to get posted data
const servicesAll = async (req, res) => {
  try {
    const services = await Services.find();
    if (!services || services.lenth === 0) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = servicesAll;
