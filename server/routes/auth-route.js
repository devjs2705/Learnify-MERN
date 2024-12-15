const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller.js")
const validate = require("../middlewares/validate-middleware.js")
const {signUpSchema, loginSchema} = require("../validators/auth-validator.js")

// Home page
router.route("/").get(authControllers.home);

// Register / Sign-Up
router.route("/register").post(validate(signUpSchema) , authControllers.register);

// Login / Sign-In
router.route("/login").post(validate(loginSchema), authControllers.login);

module.exports = router;