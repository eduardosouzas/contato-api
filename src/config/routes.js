const express = require('express')

module.exports = function(server) {
    // Definir URL para todas as rotas
    const router = express.Router()
    server.use('/api', router)

       // CONTATO Routes
       const todoService = require('../api/contato/contatoService')
       todoService.register(router, '/contato')
}