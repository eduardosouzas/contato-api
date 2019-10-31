const Contato = require('./contato')
const errorHandler = require('../common/errorHandler')

// Criar rotas para os metodos
Contato.methods(['get', 'post', 'put', 'delete'])

// metodo adicionar para incluir o retorno do objeto e validacao 
Contato.updateOptions({new: true, runValidators: true})

// tratamento de erro para os metodos post e put
Contato.after('post', errorHandler).after('put', errorHandler)

module.exports = Contato
