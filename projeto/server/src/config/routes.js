const express = require('express');

module.exports = server => {
    const router = express.Router();
    server.use('/api', router);

    const serviceCursos = require('../api/cursos/service');
    const serviceContatos = require('../api/contatos/service');
    const serviceCompromissos = require('../api/compromissos/service');

    serviceCursos.register(router, '/cursos');
    serviceContatos.register(router, '/contatos');
    serviceCompromissos.register(router, '/compromissos');
}