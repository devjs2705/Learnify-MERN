const { z } = require("zod")

const contactFormSchema = z.object({
    
    username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must have atleast 3 characters" })
    .max(255, { message: "Username cannot have more than 255 characters" }),

    email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must have atleast 3 characters" })
    .max(255, { message: "Email cannot have more than 255 characters" }),

    message: z
    .string({ required_error: "Message required" })
    .trim()
    .min(10, { message: "message must have atleast 10 characters" })
    .max(500, { message: "message cannot have more than 500 characters" }),

});

module.exports = contactFormSchema;