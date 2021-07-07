import {Request, Response} from 'express';
import Usuario from "../models/usuario";

export const getUsuarios = async (request: Request, response: Response) => {
    // Obtiene todos los registros
    const usuarios = await Usuario.findAll();
    // Return json
    response.json({
        message: 'getUsuarios',
        usuarios
    });
}


export const getUsuario = async (request: Request, response: Response) => {
    // Destructura y optiene el parametro de la url enviada
    const {id} = request.params;

    const usuario = await Usuario.findByPk(id);

    if (usuario) {
        // Return json
        response.json({
            message: 'getUsuarios',
            id,
            usuario
        });
    } else {
        response.status(404).json({
            message: `No se encontro el usuario con el id ${id}`
        })
    }

}

export const postUsuario = async (request: Request, response: Response) => {
    // Destructura y optiene el parametro de la url enviada
    const {body} = request;

    try {

        const usuario = Usuario.build(body);

        const existeUsuarioEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if (existeUsuarioEmail) {
            return response.status(400).json({
                error: `El email ${body.email}, ya se encuentra en uso`
            })
        }

        await usuario.save();

        // Return json
        response.json({
            message: 'postUsuarios',
            body,
            usuario
        });

    } catch (error) {
        response.status(500).json({
            error: error
        });
    }


}


export const putUsuario = async (request: Request, response: Response) => {
    // Destructura y optiene el parametro de la url enviada
    const {body} = request;
    const {id} = request.params;

    try {
        // new User(body) // otra alternativa pero requiere definir el tipo de dato del body
        const usuario = Usuario.build(body);

        const existeUsuarioEmail = await Usuario.findByPk(id);

        if (!existeUsuarioEmail) {
            return response.status(400).json({
                error: `El usuario con el id:  ${id}, no existe!!!`
            })
        }

        // envia el objeto con el body
        await usuario.update(body);

        // Return json
        response.json({
            message: 'putUsuario',
            body,
            usuario
        });

    } catch (error) {
        response.status(500).json({
            error: error
        });
    }

}

export const deleteUsuario = async (request: Request, response: Response) => {
    // Destructura y optiene el parametro de la url enviada
    const {id} = request.params;

    const usuario = await Usuario.findByPk(id);

    if (usuario) {
        await usuario?.destroy();
        // Return json
        response.json({
            message: 'deleteUsuario',
            id,
            usuario
        });
    } else {
        response.status(404).json({
            message: `No se encontro el usuario con el id ${id}`
        })
    }
}

