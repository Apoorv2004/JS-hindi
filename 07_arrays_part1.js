// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["superman", "batman", "spiderman", "ironman"];

const myArr2 = new Array(1, 2, 3, 4, 5);
//console.log(myArr[0]); // 0
//console.log(myHeros[2]); // spiderman
  

// array methods

myArr.push(6); // adds 6 to the end of the array
myArr.push(7); // adds 7 to the end of the array
//console.log(myArr); 
myArr.pop(); // adds 8 to the end of the array
//console.log(myArr); 

myArr.unshift(-1); // adds -1 to the beginning of the array
//console.log(myArr); 

myArr.shift(); // removes the first element of the array
//console.log(myArr);

myArr.includes(3); // checks if the array includes 3
//console.log(myArr.includes(3)); // true

myArr.indexOf(3); // returns the index of 3 in the array
//console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join()  // joins the array into a string

//console.log(myArr)
//console.log(newArr);

// slice and splice

console.log("A" , myArr);

const slicedArr = myArr.slice(1, 4); // slices the array from index 1 to index 4 (not inclusive)

console.log(slicedArr); 

console.log("B" , myArr);

const spliceArr = myArr.splice(1, 4); // removes 4 elements from index 1 to index 4 and returns them(inclusive)
console.log(spliceArr); // returns the removed elements
console.log("C" , myArr); // shows the modified array

// splice changes the original array
// slice does not change the original array                                                                                                          /