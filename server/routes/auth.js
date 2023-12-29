const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
  try {
    const { name, mobileNo, email_id, password } = req.body;

    if (!name || !mobileNo || !email_id || !password) {
      return res.status(422).json({
        status: "Failed",
        message: "All fields required",
      });
    }

    const userExists = await User.findOne({ mobileNo, email_id });
    if (userExists) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      mobileNo,
      email_id,
      password: encryptedPassword,
    });

    const registerToken = jwt.sign(newUser.toJSON(), process.env.JWT_KEY, {
      expiresIn: 14400,
    });
    res.status(200).json({
      status: "Success",
      message: "User created Successfully",
      userdata: newUser,
      token: registerToken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
      message: "Internal Server Error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email_id, password } = req.body;

    if (!email_id  || !password) {
      return res.status(401).json({
        status: "failed",
        message: "all fields required",
      });
    }

    const findUser = await User.findOne({email_id})

    if (!findUser) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }

    const findPassword = await bcrypt.compare(password, findUser.password);
    if (!findPassword) {
      return res.status(404).json({
        status: "failed",
        message: "invalid password",
      });
    }

    const loginToken = jwt.sign(findUser.toJSON(), process.env.JWT_KEY, {
      expiresIn: 14400,
    });

    return res.status(200).json({
      status: "success",
      user: findUser,
      token: loginToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Internal server error",
    });
  }
});

module.exports = router;
