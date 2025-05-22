const name = "Apoorv";
const repo = 50;

// console.log(name + repo + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gmaeName = new String('Apoorv-ac-com');

// console.log(gmaeName[0]);
// console.log(gmaeName.__proto__);

// console.log(gmaeName.length);
// console.log(gmaeName.toUpperCase());
// console.log(gmaeName.toLowerCase());
// console.log(gmaeName.charAt(4));
// console.log(gmaeName.indexOf('o'));

const newString = gmaeName.substring(0, 4);
console.log(newString);

const anotherString = gmaeName.slice(-8,4);
console.log(anotherString)

const newString1 = "   Apoorv   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://apoorv.com/apoorv%20Chauhan"
console.log(url.replace('-20', '-'));

console.log(url.includes('sundar'));

console.log(gmaeName.split('-'));


