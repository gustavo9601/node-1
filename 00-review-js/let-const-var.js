// var => crea la variable en ambito global
var name = 'Wolverine';

// Constante no se peude cambiar el valor
const nameConstant = 'Spider';

function call_name() {
    // Variable de scope
    let name = 'Magneto'
    return name;
}

console.log("name > ", name)
console.log("name call_name > ", call_name())
console.log("name constant", nameConstant)

