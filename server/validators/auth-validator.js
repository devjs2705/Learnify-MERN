const { z } = require("zod")

const signUpSchema = z.object({
    
    username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must have atleast 3 characters" })
    .max(255, { message: "Username cannot have more than 255 characters" }),

    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must have atleast 3 characters" })
    .max(255, { message: "Email cannot have more than 255 characters" }),

    phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone must have atleast 10 characters" })
    .max(20, { message: "Phone cannot have more than 20 characters" }),

    password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must have atleast 6 characters" })
    .max(1024, { message: "Password cannot have more than 1024 characters" }),

});

const loginSchema = z.object({

    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must have atleast 3 characters" })
    .max(255, { message: "Email cannot have more than 255 characters" }),

    password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must have atleast 6 characters" })
    .max(1024, { message: "Password cannot have more than 1024 characters" }),
});

module.exports = {signUpSchema, loginSchema};