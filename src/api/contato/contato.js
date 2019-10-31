const restful = require('node-restful')
const mongoose = restful.mongoose

const contatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    canal: { type: String, required: true },
    valor: { type: String, required: true },
    obs: { type: String }
})

module.exports = restful.model('contato', contatoSchema)