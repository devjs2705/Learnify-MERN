const User = require("../models/user-model.js");

const home = async (req, res) => {
    try {
        res.status(200).send("Controller home");
    } catch (error) {
        res.send("Controller Home Error");
    }
};


// Registration Logic
const register = async (req, res) => {
    try {

        const { username, email, phone, password } = req.body;

        // checking if email already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // creating the user to store in DB (from here it will go to pre("save") of user-model)
        const userCreated = await User.create({
            username,
            email,
            phone,
            password
        });

        res.status(200).json({ 
            message: userCreated, 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString(), 
        });

    } catch (error) {
        console.error(error);
        res.status(500).json("internal server error");
    }
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const userExist = await User.findOne({email})

        if(!userExist)
            return res.status(401).json({ message: "Invalid Credentials" });
        
        const user = userExist.comparePassword(password);

        if(user)
        {
            res.status(200).json({
                message : "Login Successful",
                token : await userExist.generateToken(),
                userId : userExist._id.toString(),
            })
        }
        else
        {
            res.status(401),json({ message : "Invalid Credentials" })
        }

    } catch (error) {
        res.status(500).json({ message : "Login failed, please try again later"});
    }
};

module.exports = { home, register, login };