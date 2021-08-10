const http = require("http");

/*
*
* Request  => Informacion del rquest enviado por cliente (Tipo de verbo, path)
* Response => Return al cliente
*
* */
http.createServer((request, response) => {
    // Modificando los header de respuesta, y el tipo de aplicacion
    response.writeHead(201, {'Content-Type' : 'application/json'});

    const user = {
        name: 'gus',
        age: 25
    }
    // Return
    response.write(JSON.stringify(user));


    // Finalizando la peticion
    response.end();
}).listen(8080);


