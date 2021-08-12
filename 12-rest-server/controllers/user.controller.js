const {response} = require('express')

const Usuario = require('./../models/user');

const usuariosGet = (request, response = response) => {
    response.json({
        msg: 'API Get'
    });
}

const usuariosPost = async (request, response) => {

    const argumentos = request.body;

    const usuario = new Usuario(argumentos);

    // guardando
    await usuario.save();

    response.json({
        msg: 'API POST',
        usuario
    });
}

const usuariosPut = (request, response) => {

    // extrayendo del request los params
    const parametroUrl = request.params.id;

    // extrae los parametros enviados con ?param=value
    const parametrosQuery = request.query;

    response.json({
        msg: 'API PUT',
        id: parametroUrl,
        query: parametrosQuery
    });
}

const usuariosDelete = (request, response) => {
    // Cambian el status code
    response.status(204).json({
        msg: 'API DELETE'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}
