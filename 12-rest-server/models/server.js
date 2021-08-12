const express = require('express')
const cors = require('cors');
const {dbConnection} = require('./../database/config');


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

        // Conectar a la bd
        this.connectarDB();

        // Directorio publico
        this.app.use(express.static('public'));

        // Parseo Lectura y parseo del body
        // La data se serializa a json
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async connectarDB() {
        await dbConnection();
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
