const mongoose = require("mongoose");

const { Schema } = mongoose;

const phoneSchema = new Schema({
    numero: {
        type: Number,
        required: true,
    },
    ddd: {
        type: Number,
        required: true,
    },
});

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = {
    Phone,
    phoneSchema,
};
