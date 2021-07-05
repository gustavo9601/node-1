// import FileSystem to maniputalte fichs
const fs = require('fs');

multiply_table = (numberToMultiply, limit, list=false) => {
    let output = '';
    for (let i = 1; i <= limit; i++) {
        output += `${numberToMultiply} x ${i} = ${numberToMultiply * i} \n`;
        if(list){
            console.log(`${output}`);
        }
    }
    return output;
}

buildFile = (numberToMultiply, limit, list = false) => {
    const dataToWrite = multiply_table(numberToMultiply, limit, list);
// () => {} // call back cuando finalice
    fs.writeFile('./../files/mutiple_table.txt', dataToWrite, (error) => {
        // si devuelve algun error en el callback
        if (error) throw error;
        console.log('escritura satisfactoria');
    });

    /*
    * Otra forma de escribir,
    * Debe estar dentro de un try catch para controlar si ocurre alguna execpcion
    * fs.writeFileSync('./../files/mutiple_table.txt', dataToWrite);
    * */
}


module.exports = {
    buildFile
}
