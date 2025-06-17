//Arrays
const myarray = []

// add elements to the array
myarray[0] = "Apoorv";
myarray[1] = 1001;
myarray[2] = true;

//refer to an array 
console.log(myarray); // Output: [ 'Apoorv', 1001, true ]

// Accessing elements in an array
console.log(myarray[0]); // Output: Apoorv

// Length of an array
console.log(myarray.length); // Output: 3   

// last element of an array
console.log(myarray[myarray.length - 1]); // Output: true

// Adding elements to an array
myarray.push("Ufffapoorv");
console.log(myarray); // Output: [ 'Apoorv', 1001, true, 'Ufffapoorv' ] 

// Removing the last element from an array
myarray.pop();
console.log(myarray); // Output: [ 'Apoorv', 1001, true ]

const myarray2 = ["A", "B", "C", "D", "E", "F"];

myarray2.reverse(); // Reverses the array
console.log(myarray2); // Output: [ 'F', 'E', 'D', 'C', 'B', 'A' ]

//joining arrays
const joinedArray = myarray2.join(", ");
console.log(joinedArray); // Output: F, E, D, C, B, A

//splitting strings into arrays
const myString = "Hello, World!";
const splitArray = myString.split(", ");
console.log(splitArray); // Output: [ 'Hello', 'World!' ]


// nested arrays
const equipShel1fA = ["baseball", "football", "basketball"];
const equipShel1fB = ["tennis", "badminton", "cricket"];

const clothesShelfA = ["t-shirt", "jeans", "jacket"];
const clothesShelfB = ["sweater", "shorts", "hat"];

console.log(equipShel1fA[1]); // Output: football
console.log(clothesShelfB[2]); // Output: hat

// Nested arrays
const equipdept= [equipShel1fA, equipShel1fB];
const clothesdept = [clothesShelfA, clothesShelfB];
console.log(equipdept[0][1]); // Output: football
console.log(clothesdept[1][2]); // Output: hat 