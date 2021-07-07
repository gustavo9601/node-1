"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const userRoutes = __importStar(require("../routes/usuario.route"));
const cors_1 = __importDefault(require("cors"));
const connections_1 = __importDefault(require("../db/connections"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = express_1.default();
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
        this.app.use(cors_1.default());
        // Lectura y parseo del body
        this.app.use(express_1.default.json());
        //Carpeta publica
        // util para mostrar contenido publico o redirecciones
        this.app.use(express_1.default.static('public'));
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verifica la conexion con la BD
                yield connections_1.default.authenticate();
                console.log('Database UP!!');
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server UP in port", this.port);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map