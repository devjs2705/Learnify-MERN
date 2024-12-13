const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller.js")

// Home page
router.route("/").get(authControllers.home);

// Register / Sign-Up
router.route("/register").post(authControllers.register);

// Login / Sign-In
router.route("/login").post(authControllers.login);

module.exports = router;