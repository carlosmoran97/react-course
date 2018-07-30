var nameVar = "Carlos";
var nameVar = "Morán";

console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Katlheen";
console.log("nameConst", nameConst);
// block scoping
// function getPetName(){
//     var petName = "Rocky";
//     return petName;
// }

// getPetName();

// console.log(petName);

var fullName = "Melissa Morán";
let firstName;
if(fullName){
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);