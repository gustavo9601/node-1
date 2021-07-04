const deadpool = {
    name: 'Wade',
    lastname: 'Winston',
    nickname: 'Deadpool',
    getFullName() {
        return `${this.name} ${this.lastname}`
    }
}

/*Assign manual*/
/*
const name = deadpool.name;
const lastname = deadpool.lastname;
const nickname = deadpool.nickname;
*/

/*Desctructuring objects*/
const {name, lastname, nickname} = deadpool
console.log("name, lastname, nickname >", name, lastname, nickname);

// Se le envian los valores destructurados
function printHero({name, lastname, nickname}) {
    console.log("printHero | name, lastname, nickname >", name, lastname, nickname);
}

printHero(deadpool)

/*Usando el operador rest, para obtner los datos del array sin acceder a sus posiciones*/
const heroes = ['Deadpool', 'Superman', 'Batman'];
console.log("heroes > ", ...heroes)


/*Destructurando un array
* Asigna masivamente por posicion desde un objeto a un arreglo
* */

const [h1, h2, h3] = heroes;
console.log("h1, h2, h3 >", h1, h2, h3)


