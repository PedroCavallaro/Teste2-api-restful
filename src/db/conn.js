const mongoose = require('mongoose');
require('dotenv').config();

const conn = async () => {
    try {
        //Estava utilizando o process.env, porem para vocês testarem o código será necessário a string de conexão
        // await mongoose.connect(process.env.CONNECTION_STRING);
        //Deixarei ela hard coded
        await mongoose.connect(
            'mongodb+srv://pedro:bWqDwtUcdwSggfe8@teste.oqk2cce.mongodb.net/?retryWrites=true&w=majority'
        );
        console.log('conectado!');
    } catch (err) {
        console.log(err);
    }
};

module.exports = conn;
