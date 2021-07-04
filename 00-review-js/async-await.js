const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleado = (id) => {

    const empleado = empleados.find(e => e.id === id)

    return new Promise((resolve, reject) => {
        if (empleado) {
            resolve(empleado)
        } else {
            reject(`No existe empleado con id ${id}`)
        }
    });

}

const getSalary = (id) => {
    const salary = salarios.find(s => s.id == id);
    return new Promise(((resolve, reject) => {
        return (salary) ? resolve(salary) : reject(`No se encontro el salrio para el id ${id}`)
    }))
}

const id = 1;
getEmpleado(id)
    .then(
        (dataResult) => {
            console.log("dataResult", dataResult)
        }
    ).catch(
    (errorResult) => {
        console.log("error result >>>", errorResult)
    }
)


/*
* Async transforma una funcion para que retorne una promesa
* // Para este caso se usa para unifircar varias promesas que se deben resolver y con el await es mas ordenado
* */

const getInfoUser = async (id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalary(id);
        return `Nombre: ${empleado.nombre} | Salario: ${salario.salario}`;
    } catch (e) {
        throw e;
    }
}

getInfoUser(id)
    .then(data => console.log("getInfoUser await >", data))
    .catch((error) => console.log("Error en getInfoUser >", error))


getSalary(id)
    .then((data) => console.log("salary", data))
    .catch((error) => console.log("error get salary", error))

