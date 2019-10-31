mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://contato_user:qwerty1234@ds141198.mlab.com:41198/contato_api', {
        "useMongoClient": true
    })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."

