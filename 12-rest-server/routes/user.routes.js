const {Router} = require('express');
const {usuariosGet, usuariosPost, usuariosPut, usuariosDelete} = require('./../controllers/user.controller');

const router = Router();

// Invoca la funcion del controlador
router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/', usuariosDelete);


module.exports = router;
