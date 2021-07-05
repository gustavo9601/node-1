// importando archivo de multiplicacion
// desctructura lo que envie en el module.exports
const {buildFile} = require('./../02-basics-manipulation-files/multiply');


/*
* process.argv => devuelve un arreglo con los parametros enviados por consola
* los 2 primeros son default del sistema
*
* */
console.log(process.argv)
// destructurando el arreglo que devuelve process.argv en mulitpleas variables
// ,, no asigna el valor para esas posiciones
// argument3='base=5' permite asignare valor por default de no recibir algun parametro
const [, , argument3 = 'numberToMultiply=5', argument4 = 'limit=100'] = process.argv;

const [, numberToMultiply] = argument3.split('=');
const [, limit] = argument3.split('=');

buildFile(numberToMultiply, limit);

console.log("argument3 > ", argument3);
console.log("argument4 > ", argument4);
