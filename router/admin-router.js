const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllusers);
//contacts routes
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllcontact);

router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router
  .route("/blogs")
  .post(authMiddleware, adminMiddleware, adminController.blogPost);

//services
router
  .route("/services")
  .post(authMiddleware, adminMiddleware, adminController.createServices);

module.exports = router;
