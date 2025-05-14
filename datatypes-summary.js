// # Primitive

// 7 types : String, Number, BigInt, Boolean, Symbol, null, undefined

const score = 100
const scorevalue = 100.5
const isloggedin = false
const outsidetemp = null;
let useremail;

const id = Symbol('123');
const id2 = Symbol('123');

console.log(id === id2); 

const bigNumber = BigInt(1234567890123456789012345678901234567890);



// # Reference(Non-primitive)

// 5 types : Object, Array, Function

const Hero = ["Superman","Batman","Spiderman"];
const myObject = {
    name: 'Apoorv',
    age: 22,
}

const myFunction =function() {
    console.log('Hello World');
}

console.log(typeof Hero);