import {Router} from "express";
import {deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario} from "../controllers/usuarios.controller";

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);

// Indicandole a typescript lo que se exporta por defecto
// de forma que cuando se import se pueda hacer directamente por el nombre "router" sin destructurar el objeto
export default router;
