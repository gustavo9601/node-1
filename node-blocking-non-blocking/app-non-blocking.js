const { getUsuario } = require('./users/data-users');

console.log('Inicio de programa');
console.time('inicio');

/*Permite usar parale*/

getUsuario( 1, ( usuario ) => {
    console.log('Usuario 1:', usuario );
});


getUsuario( 2, ( usuario) => {
    console.log('Usuario 2:', usuario );
    console.timeEnd('inicio');
});


console.log('Fin de programa');
