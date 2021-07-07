"use strict";
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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtiene todos los registros
    const usuarios = yield usuario_1.default.findAll();
    // Return json
    response.json({
        message: 'getUsuarios',
        usuarios
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructura y optiene el parametro de la url enviada
    const { id } = request.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        // Return json
        response.json({
            message: 'getUsuarios',
            id,
            usuario
        });
    }
    else {
        response.status(404).json({
            message: `No se encontro el usuario con el id ${id}`
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructura y optiene el parametro de la url enviada
    const { body } = request;
    try {
        const usuario = new usuario_1.default(body);
        yield usuario.save();
        // Return json
        response.json({
            message: 'postUsuarios',
            body,
            usuario
        });
    }
    catch (error) {
        response.status(500).json({
            error: error
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (request, response) => {
    const { id } = request.params;
    const { body } = request;
    // Return json
    response.json({
        message: 'getUsuarios',
        body
    });
};
exports.putUsuario = putUsuario;
const deleteUsuario = (request, response) => {
    const { id } = request.params;
    // Return json
    response.json({
        message: 'getUsuarios',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=ususerios.controller.js.map