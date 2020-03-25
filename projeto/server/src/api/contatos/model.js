const restfull = require('node-restful');
const mongoose = restfull.mongoose;

const modelo = new mongoose.Schema({
    data : { type : Date },
    nome : { type : String },
    email : { type : String },
    assunto : { type : String }
});

module.exports = restfull.model('contato', modelo);