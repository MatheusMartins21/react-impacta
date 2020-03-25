const express = require('express');

module.exports = server => {
    const router = express.Router();
    server.use('/api', router);

    const serviceCursos = require('../api/cursos/service');
    const serviceContatos = require('../api/contatos/service');

    serviceCursos.register(router, '/cursos');
    serviceContatos.register(router, '/contatos');
}