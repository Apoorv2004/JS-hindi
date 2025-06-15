const marvelHeroes = ["thor", "ironnman", "hulk", "spiderman", "captain america"];
const dc_heroes = ["superman", "batman", "wonder"]

//marvelHeroes.push(dc_heroes); // adds all elements of dc to marvelHeroes

//console.log(marvelHeroes); // ["thor", "ironnman", "hulk", "spiderman", "captain america", ["superman", "batman", "wonder"]]

//console.log(marvelHeroes[5]); // batman

// const allheroes = marvelHeroes.concat(dc_heroes)

// console.log(allheroes); ["thor", "ironnman", "hulk", "spiderman", "captain america", "superman", "batman", "wonder"]

// const allHeroes = [...marvelHeroes, ...dc_heroes]; // using spread operator to combine arrays

// console.log(allHeroes); // ["thor", "ironnman", "hulk", "spiderman", "captain america", "superman", "batman", "wonder"]


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity); // flattens the array to a single level

console.log(real_another_array);


console.log(Array.isArray("Apoorv"))
console.log(Array.from("Apoorv")) // converts a string to an array;
 
console.log(Array.from({name: "Apoorv"})); // converts an object to an array with the keys as the elements will return an empty array as the object has no iterable properties


let score1 =100;
let score2 = 200;
let score3 = 300;   

console.log(Array.of(score1, score2, score3)); // creates an array from the arguments passed
