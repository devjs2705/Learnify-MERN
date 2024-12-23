const express = require("express")
const router = express.Router()
const contactForm = require("../controllers/contact-controller")
const validate = require("../middlewares/validate-middleware.js")
const contactFormSchema = require("../validators/contact-validator.js")

// route for contact page
router.route("/contact").post(validate(contactFormSchema), contactForm)

module.exports = router;