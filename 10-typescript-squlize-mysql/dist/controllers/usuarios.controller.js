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
        const usuario = usuario_1.default.build(body);
        const existeUsuarioEmail = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeUsuarioEmail) {
            return response.status(400).json({
                error: `El email ${body.email}, ya se encuentra en uso`
            });
        }
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
const putUsuario = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructura y optiene el parametro de la url enviada
    const { body } = request;
    const { id } = request.params;
    try {
        // new User(body) // otra alternativa pero requiere definir el tipo de dato del body
        const usuario = usuario_1.default.build(body);
        const existeUsuarioEmail = yield usuario_1.default.findByPk(id);
        if (!existeUsuarioEmail) {
            return response.status(400).json({
                error: `El usuario con el id:  ${id}, no existe!!!`
            });
        }
        // envia el objeto con el body
        yield usuario.update(body);
        // Return json
        response.json({
            message: 'putUsuario',
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
exports.putUsuario = putUsuario;
const deleteUsuario = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // Destructura y optiene el parametro de la url enviada
    const { id } = request.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        yield (usuario === null || usuario === void 0 ? void 0 : usuario.destroy());
        // Return json
        response.json({
            message: 'deleteUsuario',
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
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.controller.js.map