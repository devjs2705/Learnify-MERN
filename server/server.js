require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./routes/auth-route.js")
const contactRoute = require("./routes/contact-route.js")
const connectDb = require("./utils/DB.js")
const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);


const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port: ${PORT}`);
    });
});

