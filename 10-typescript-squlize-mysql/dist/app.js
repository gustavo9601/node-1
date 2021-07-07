"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = require("./models/server");
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
dotenv_1.default.config();
// Init server class
const server = new server_1.Server();
server.listen();
//# sourceMappingURL=app.js.map