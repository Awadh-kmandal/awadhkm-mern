const express = require("express");
const authControllers = require("../controllers/auth-controller");
const router = express.Router();
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/auth-validator");
const authMiddleware = require("../middlewares/auth-middleware");
router.route("/").get((req, res) => {
  res.status(200).send("Welcome to mern Developer from router");
});

router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);

router.route("/login").post(authControllers.login);
router.route("/user").get(authMiddleware, authControllers.user);
module.exports = router;
