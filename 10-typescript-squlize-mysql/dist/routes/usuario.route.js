"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = express_1.Router();
router.get('/', usuarios_controller_1.getUsuarios);
router.get('/:id', usuarios_controller_1.getUsuario);
router.post('/', usuarios_controller_1.postUsuario);
router.put('/:id', usuarios_controller_1.putUsuario);
router.delete('/:id', usuarios_controller_1.deleteUsuario);
// Indicandole a typescript lo que se exporta por defecto
// de forma que cuando se import se pueda hacer directamente por el nombre "router" sin destructurar el objeto
exports.default = router;
//# sourceMappingURL=usuario.route.js.map