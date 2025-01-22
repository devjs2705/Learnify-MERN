const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/auth-controller.js")
const validate = require("../middlewares/validate-middleware.js")
const {signUpSchema, loginSchema} = require("../validators/auth-validator.js")
const authMiddleware = require("../middlewares/auth-middleware.js")

// Home page
router.route("/").get(authControllers.home);

// Register / Sign-Up
router.route("/register").post(validate(signUpSchema) , authControllers.register);

// Login / Sign-In
router.route("/login").post(validate(loginSchema), authControllers.login);

// User / to get user data
router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;