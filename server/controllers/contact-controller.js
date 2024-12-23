const Contact = require("../models/contact-model.js")

const contactForm = async (req, res) => {
    try {
        const {username, email, message} = req.body;
        await Contact.create({
            username,
            email,
            message
        });
        res.status(200).json({ message: "message sent successfully" });
    } catch (error) {
        res.status(500).json({ message: "message not sent, some error occured" });
    }
}

module.exports = contactForm;