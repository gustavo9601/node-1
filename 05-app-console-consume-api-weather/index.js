const {leerInput, preguntas, inquirerMenu, pausa, listarLugares} = require('./helpers/inquirer');
// Reuqiere la libreria que lee los archivos de entorno, para guardar en el process.env las nuevas variables de entorno
require('dotenv').config()


const Busquedas = require('./models/busquedas');

const main = async () => {

    let opcion;
    const busquedas = new Busquedas();

    do {
        opcion = await inquirerMenu();
        switch (opcion) {
            case 1:
                // Mostrar mensaje
                const ciudad = await leerInput('Ciudad');
                // Busqueda de lugares
                const lugares = await busquedas.buscarCiudad(ciudad);
                console.log("lugares", lugares)
                // Seleccionar el lugar
                const idCiudadSeleccionado = await listarLugares(lugares);
                console.log("idCiudadSeleccionado", idCiudadSeleccionado)
                const ciudadSeleccionada = lugares.find(lugar => lugar.id === idCiudadSeleccionado);
                console.log("ciudadSeleccionada", ciudadSeleccionada)

                // Clima
                // Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', ciudadSeleccionada.nombre);
                console.log('Lat:', ciudadSeleccionada.lat);
                console.log('Lng:', ciudadSeleccionada.lng);
                console.log('Temperatura:');
                console.log('Minima:');
                console.log('Maxima:');
                break;
        }


        // Funciion que recibe el valor y espera al enter
        await pausa();
        // Mienras no sea igual a 0 saldra del bucle
    } while (opcion !== 0)

}

main();
