// function

// Methods = Built-in functions

"Apoorv".toUpperCase(); // "APOORV"
"Apoorv".toLowerCase(); // "apoorv"
Math.random(); // Returns a random number between 0 and 1


// Functions Declaration Syntax

function sum(num1, num2) {
     if(num2 === undefined) {
         num2 = 0; // Default value for num2 if not provided
     }
    return num1 + num2;
}
console.log(sum(2,6)); // Output: 8



function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("playerone@gmail.com")); // Output: playerone


// Function Expression Syntax
const sum = function(num1, num2) {
    if(num2 === undefined) {
        num2 = 0; // Default value for num2 if not provided
    }
    return num1 + num2;
};       