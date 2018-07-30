"use strict";
// diferencias entre funciones normales y arrow functions
// no se puede usar el objeto "arguments"

const add = function(a ,b){
    console.log(arguments);
    return a + b;
};

// console.log(add(55, 22));


// no se puede usar la palabra clave "this"

// dentro de cities.forEach si usamos ES5 functions se ocupa
// la palabra this del contexto donde es invocada, y tiene un valor de
// undefined. Pero como las arrow functions no lo usan, automaticamente
// hacemos referencia al this de su parent. El cual es el objeto user.
// const user = {
//     name: "Carlos",
//     cities: ["Santa Tecla", "San Salvador", "Lourdes"],
//     printPlacesLived(){
//         this.cities.forEach((city) => {
//             console.log(`${this.name} has lived in ${city}`);
//         });
//     }
// };

const user = {
    name: "Carlos",
    cities: ["Santa Tecla", "San Salvador", "Lourdes"],
    printPlacesLived(){
        return this.cities.map((city) => `${this.name} has lived in ${city}`);
    }
};

console.log(user.printPlacesLived());

// challenge area
const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy*number);
    } 
};

console.log(multiplier.multiply());