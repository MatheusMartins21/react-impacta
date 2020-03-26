const restfull = require('node-restful');
const mongoose = restfull.mongoose;

const modelo = new mongoose.Schema({
    data : { type : Date, required : true },
    nome : { type : String, required : true },
    email : { type : String, required : true,
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]},
    assunto : { type : String, required : true }
});

module.exports = restfull.model('contato', modelo);