import {isAdult, canDrink} from './person.js'

const person = {
    age: 18
};

console.log('Is adult?', isAdult(person.age));
console.log('Can drink?', canDrink(person.age));

