const mongoose = require("mongoose");
require("dotenv").config();

const conn = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("conectado!");
    } catch (err) {
        console.log(err);
    }
};

module.exports = conn;
