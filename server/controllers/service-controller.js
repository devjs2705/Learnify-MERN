const Service = require("../models/service-model.js")

const services = async (req, res) => {
    try {
        const response = await Service.find();

        if(!response)
        {
            res.status(404).json({ msg: "service fetching error" });
        }

        res.status(200).json({ msg: response });
    } catch (error) {
        console.log("Error in fetching services", error);
        
    }
}

module.exports = services;