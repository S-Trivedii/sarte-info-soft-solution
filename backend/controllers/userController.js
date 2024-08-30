const dotenv = require("dotenv");
dotenv.config({ path: "./../config.env" });
const User = require("./../models/userModel");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "fail",
      errors: errors.array(), // array containing all errors
    });
  }

  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Server error",
      error: error.message, // more detailed error message
    });
  }
};

exports.loginUser = async (req, res) => {
  const errors = validationResult(req);

  // if errors-array is not empty
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "fail",
      errors: errors.array(), // array containing all errors
    });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        status: "fail",
        error: "No such user found. Try logging again...",
      });
    }

    const pwdCompare = await bcrypt.compare(password, user.password); // ture/false

    if (!pwdCompare) {
      return res
        .status(400)
        .json({ status: "fail", error: "Wrong password. Type it again." });
    }

    // Payload - The payload is an object that contains the information you want to include in the JWT
    const data = {
      user: {
        id: user._id,
      },
    };

    // creating a json webtoken using sign(payload, secret_key) method
    const authToken = jwt.sign(data, process.env.SECRET_KEY);

    // sending authToken to the client
    return res.status(200).json({ status: "success", user, authToken });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ status: "fail !", err: error.message });
  }
};
