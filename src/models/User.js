const mongoose = require("mongoose");
const { phoneSchema } = require("./Phone");

const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    telefones: {
        type: [phoneSchema],
    },
    data_criacao: Date,
    data_atualizacao: Date,
    ultimo_login: Date,
    token: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
