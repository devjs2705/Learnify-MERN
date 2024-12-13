const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    
    username:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true
    },

    phone:{
        type: String,
        require: true
    },

    password:{
        type: String,
        require: true
    },

    isAdmin:{
        type: Boolean,
        default: false,
    }
});

// Hashing the passoword with bcrypt.js
// when we use the User.create then the data comes here first and then it goes to DB
// so we can hash(secure) the passoword here before saving it
userSchema.pre("save", async function(next){
    
    // "this" has all the data(username, email, phone, passoword, isAdmin)
    const user = this;

    if(!user.isModified("password"))
        next();

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashPassword;
    } catch (error) {
        next(error);
    }
});

// JSON WEB TOKENS (JWT)
// creating a new method/function  in userSchema and it can be used anywhere
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign(
            
            // payload of JWT
            {
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
            },
            
            // Signature of JWT
            process.env.JWT_SECRET_KEY,

            {
                expiresIn: "30d",
            }
        );
    } catch (error) {
        console.log(error);
        
    }
}

// Comparing password during login
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}


// define the model name / collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;