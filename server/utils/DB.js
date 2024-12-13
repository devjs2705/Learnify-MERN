const mongoose = require("mongoose")

// const URI =  "mongodb://127.0.0.1:27017/Learnify-admin";
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database connection error");
        console.log(error.message);
        
        process.exit(0);
    }
}

module.exports = connectDb;