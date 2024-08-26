const express = require("express");
const router = express.Router();

const blogAll = require("../controllers/blogs.controller");

router.route("/blogs").get(blogAll);
module.exports = router;
