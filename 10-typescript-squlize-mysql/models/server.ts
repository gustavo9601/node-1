import express from 'express';
import * as userRoutes from '../routes/usuario.route';
import cors from 'cors';
import db from "../db/connections";

export class Server {
    private app: express.Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // init middlewares
        this.middlewares();

        // load database
        this.dbConnection();

        // init routes
        this.routes();
    }

    routes() {
        // Load the paths and countrollers to response
        // .use(inicio del path, rutas)
        this.app.use(this.apiPaths.usuarios, userRoutes.default);
    }

    middlewares() {
        //Cors
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
        //Carpeta publica
        // util para mostrar contenido publico o redirecciones
        this.app.use(express.static('public'));
    }

    async dbConnection(){
        try{
            // Verifica la conexion con la BD
            await db.authenticate();
            console.log('Database UP!!')
        }catch (e) {
            throw new Error(e);
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server UP in port", this.port);
        })
    }

}
