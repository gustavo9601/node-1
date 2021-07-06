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
                // Seleccionar el lugar
                const idCiudadSeleccionado = await listarLugares(lugares);
                // Si se selecciona 0 se skipea el resto de codigo
                if (idCiudadSeleccionado == '0') continue;

                const ciudadSeleccionada = lugares.find(lugar => lugar.id === idCiudadSeleccionado);

                //Guardar la busqueda en db
                busquedas.agregarHistorial(ciudadSeleccionada.nombre);

                // Clima
                const clima = await busquedas.climaCiudad(ciudadSeleccionada.lat, ciudadSeleccionada.lon);
                console.log("clima > ", clima);

                // Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', ciudadSeleccionada.nombre);
                console.log('Lat:', ciudadSeleccionada.lat);
                console.log('Lng:', ciudadSeleccionada.lon);
                console.log('Temperatura:', clima.temp);
                console.log('Minima:', clima.min);
                console.log('Maxima:', clima.max);
                console.log('Como esta el clima', clima.desc.green)
                break;
            case 2:
                busquedas.historial.forEach((ciudad, i) => {
                   const idx =  `${i + 1}.`.green;
                   console.log(`${idx} ${ciudad}`);
                });
                break;
        }


        // Funciion que recibe el valor y espera al enter
        await pausa();
        // Mienras no sea igual a 0 saldra del bucle
    } while (opcion !== 0)

}

main();
