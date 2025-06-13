// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);
 //console.log("2" > 1);

 console.log(null > 0); // reason: null is converted to 0 in numeric comparison
 console.log(null < 0); // reason: null is converted to 0 in numeric comparison
 console.log(null == 0);// reason: null is only loosely equal to undefined, not to any number
 console.log(null >= 0);

 console.log(undefined == 0);// reason: undefined is not equal to any number
 console.log(undefined > 0);
 console.log(undefined < 0);

 
 // === 
 console.log("2" === 2);// reason: strict equality checks type and value
