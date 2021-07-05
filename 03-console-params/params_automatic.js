// importando archivo de multiplicacion
// desctructura lo que envie en el module.exports
const {buildFile} = require('./../02-basics-manipulation-files/multiply');

const argv = require('yargs')
    .option(
        'n', {
            alias: 'numberToMultiply',
            type: 'number',
            description: 'Number to multiply',
            demandOption: true
        }
    )
    .option(
        'l', {
            alias: 'limit',
            type: 'number',
            description: 'Number to multiply',
            demandOption: true
        }
    )
    .option(
        'li', {
            alias: 'list',
            type: 'boolean',
            default: false,
            description: 'List al multiply numbers',
            demandOption: false
        }
    )
    .check((argv, options) => { // Util para verificar los valores, y en la misma consola mostrara el error
        if (isNaN(argv.n)) {
            throw 'The base should be a number.'
        }
        if (isNaN(argv.l)) {
            throw 'The limit should be a number.'
        }
        return true;
    })
    .argv

// numberToMultiply, limit

console.log("argv yargs >", argv)

buildFile(argv.n, argv.l, argv.li);

/*
* Call in the console
*
* node params_automatic.js -n 5 -l 5
*
* */
