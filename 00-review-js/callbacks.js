/*
* Callback => Funcion que se manda como argumento a otra, y que esta decidira el momento en que se ejecutara
* */

setTimeout(() => {
    console.log('Hello from timeout!')
}, 1000);


const getUserById = (id, callback) => {
    const user = {
        id,
        name: 'Gustavo'
    }
    setTimeout(() => {
        /*Pasa los parametros al callback*/
        callback(user);
    }, 1500)
}

getUserById(15, (user) => {
    console.log("Hello World from the callback ", user)
});

