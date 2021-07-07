import dotenv from 'dotenv';
import {Server} from "./models/server";

/*
* Installations
*
*
* npm i express cors dotenv
* // helpers ts de express
* npm i --save-dev @types/express
* npm i --save-dev @types/cors
*
* npm install --save sequelize
* npm install --save mariadb
* */


// init read .env
dotenv.config();


// Init server class
const server = new Server();
server.listen();

