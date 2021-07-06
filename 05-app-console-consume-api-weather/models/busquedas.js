const axios = require('axios');

class Busquedas {
    historial = ['Bogota', 'Cali', 'Barranqulla', 'Nueva York']

    constructor() {
        // to do leer db si existe
    }

    obtenerParametros() {
        return {
            'access_token': process.env.MAPBOX_API_KEY,
            'limit': 5,
            'language': 'es'
        };
    }

    async buscarCiudad(ciudad = '') {
        try {
            // Configurando axios para realizar el request
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ciudad}.json`,
                params: this.obtenerParametros()
            });
            // realizando la peticion
            const respuesta = await instance.get();
            /* => ({})  // significa que retornara un objeto de forma implicita */
            // resúesta de la peticion esta en .data
            return respuesta.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));

        } catch (error) {
            console.log("error buscarCiudad > ", error);
        }

    }

}


module.exports = Busquedas;
