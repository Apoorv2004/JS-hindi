// singleton {literals ki tarah decleare krte h toh singleton nii banta h or constructor ki tarah decleare krte h toh singleton banta h}
//object.create


// object literals
const mysym = Symbol("my symbol");
const Jsuper = {
    name: "Apoorv",
    "full name": "Apoorv Chauhan",
    [mysym] : "This is a symbol property",
    age:20,
    location: "India",
    email:"apoorv@12.com",
    isloggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(Jsuper.email);
// console.log(Jsuper["email"]); // accessing object properties using bracket notation

// console.log(Jsuper["full name"]); // accessing object properties with spaces in the name using bracket notation
// console.log(Jsuper[mysym]); // accessing symbol property

// Jsuper.email = "apoorv@chat.com"; // updating object property
// //Object.freeze(Jsuper); // freezing the object to prevent further modifications
// Jsuper.email = "ubreed@jc.com"; // this will not change the email property because the object is frozen
// console.log(Jsuper);


Jsuper.greeting = function() { // adding a new method to the object
    console.log("Hello JS user");
}
Jsuper.greetingTwo = function() { // adding a new method to the object
    console.log(`Hello JS user, ${this.name}`); // using 'this' to access the object property
}
console.log(Jsuper.greeting()); // calling the method
console.log(Jsuper.greetingTwo()); // calling the method with 'this' context
