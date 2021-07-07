import {Sequelize} from 'sequelize';

//logging: true // permite debbugear que queries realiza
const db = new Sequelize(
    'node-1',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
    }
);

export default db;
