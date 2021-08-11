const express = require('express')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas aplicacion
        this.routes();
    }

    middlewares() {
        // Directorio publico
        this.app.use(express.static('public'));

        // Cors
        this.app.use(cors());
    }

    routes() {
        this.app.get('/hello', (request, response) => {
            response.json({
                msg: 'API Get'
            });
        });

        this.app.post('/hello', (request, response) => {
            response.json({
                msg: 'API POST'
            });
        });

        this.app.put('/hello', (request, response) => {
            response.json({
                msg: 'API PUT'
            });
        });

        this.app.delete('/hello', (request, response) => {
            // Cambian el status code
            response.status(204).json({
                msg: 'API DELETE'
            });
        });
    }

    listen() {
        this.app.listen(this.port || 8080);
    }
}

module.exports = Server;
