const axios = require('axios');
const fs = require('fs')

class Busquedas {
    historial = [];
    dbPath = './db/database.json';

    constructor() {
        // to do leer db si existe
        this.leerDB();
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
                lon: lugar.center[0],
                lat: lugar.center[1]
            }));

        } catch (error) {
            console.log("error buscarCiudad > ", error);
        }
    }


    obtenerParametrosWeather() {
        // OPENWEATHER_API
        return {
            'appid': process.env.OPENWEATHER_API,
            'units': 'metric',
            'lang': 'es'
        }
    }

    async climaCiudad(lat, lon) {
        try {

            // Configurando axios para realizar el request
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.obtenerParametrosWeather(), lat, lon}
            });
            // realizando la peticion
            const respuesta = await instance.get();
            // creamos las variables, destructurando la respuesta.data;
            const {weather, main} = respuesta.data;
            /* => ({})  // significa que retornara un objeto de forma implicita */
            // resúesta de la peticion esta en .data
            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            };

        } catch (error) {
            console.log("error clima", error);
        }
    }

    agregarHistorial(ciudad = '') {

        const lugar = ciudad.toLowerCase();
        if (this.historial.includes(lugar)) {
            return;
        }

        this.historial.unshift(lugar);
        this.guardarDB();
    }

    guardarDB() {
        const payload = {
            historial: this.historial
        };
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    leerDB() {
        // verifica si el archivo existe
        if (!fs.existsSync(this.dbPath)) return;

        const dataFile = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
        const data = JSON.parse(dataFile);

        this.historial = data.historial;
    }

}


module.exports = Busquedas;
