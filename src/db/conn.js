const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect("");
    } catch (err) {
        console.log(err);
    }
};
