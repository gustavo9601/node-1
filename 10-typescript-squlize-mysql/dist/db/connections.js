"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//logging: true // permite debbugear que queries realiza
const db = new sequelize_1.Sequelize('node-1', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
});
exports.default = db;
//# sourceMappingURL=connections.js.map