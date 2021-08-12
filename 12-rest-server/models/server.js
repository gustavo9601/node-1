const express = require('express')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        // Middlewares
        this.middlewares();

        // Rutas aplicacion
        this.routes();
    }

    middlewares() {
        // Directorio publico
        this.app.use(express.static('public'));

        // Parseo Lectura y parseo del body
        // La data se serializa a json
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    routes() {
        // Cargando las rutas a la aplicacion global
        this.app.use(this.usuariosPath, require('./../routes/user.routes'))
    }

    listen() {
        this.app.listen(this.port || 8080);
    }
}

module.exports = Server;
