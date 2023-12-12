const mongoose = require("mongoose");

const { Schema } = mongoose;

const phoneSchema = new Schema({
    numero: {
        type: String,
        required: true,
    },
    ddd: {
        type: String,
        required: true,
    },
});

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = {
    Phone,
    phoneSchema,
};
