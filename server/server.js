require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./routes/auth-route.js")
const connectDb = require("./utils/DB.js")

app.use(express.json());

app.use("/api/auth", route);


const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port: ${PORT}`);
    });
});

