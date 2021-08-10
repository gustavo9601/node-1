const express = require('express')
const app = express()

// Middleware
// Servir contenido estatito

app.use(express.static(__dirname + '/public'));
console.log("__dirname", __dirname);

app.get('/', (req, res) => {
    res.send('Inicio');
})

app.get('/hello-world', (req, res) => {
    res.send('Hello World');
})

// Cualquier otra pagina
app.get('*', (req, res) => {
    // Enviandole un archivo al response
    res.sendFile(`${__dirname}/public/404.html`);
})

app.listen(8080)
