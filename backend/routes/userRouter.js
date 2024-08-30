const express = require("express");
const userController = require("./../controllers/userController");
const { body } = require("express-validator");

const router = express.Router();

router
  .route("/signup")
  .post(
    [
      body("name").trim().notEmpty().withMessage("Name is required"),
      body("email").isEmail().withMessage("Email is not valid"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    ],
    userController.createUser
  );

router
  .route("/login")
  .post(
    [
      body("email").isEmail().withMessage("Email is not valid"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    ],
    userController.loginUser
  );

module.exports = router;
