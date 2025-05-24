//Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)

let myCreatedDate = new Date("2025-04-24")
// console.log(myCreatedDate.toLocaleString());

let myTimeStap = Date.now()

// console.log(myTimeStap);

// console.log(myCreatedDate.getTime());

// console.log(Date.now());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+ 1 ); 
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());
console.log(newDate.getDay()); 
console.log(newDate.getTime()); 

`// console.log(newDate..getDay()} and the time`

newDate.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
})
