const express = require("express");
const router = express.Router();

const ServicetForm = require("../controllers/services-controller");

router.route("/services").get(ServicetForm);
module.exports = router;
