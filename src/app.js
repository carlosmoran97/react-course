import terceraEdad, {isAdult, canDrink} from './person.js'

const person = {
    age: 18
};

console.log('Is adult?', isAdult(person.age));
console.log('Can drink?', canDrink(person.age));
console.log('Tercera edad?', terceraEdad(person.age));

// import substract, { add, square } from './utils.js'

// console.log(add(10, 12));
// console.log(square(21));
// console.log(substract(10, 2));