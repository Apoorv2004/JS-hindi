//Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()) sirf date ko print karega
// console.log(myDate.toLocaleString());    sirf date aur time ko print karega
// console.log(myDate.toLocaleTimeString());  sirf time ko print karega
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)  issme month 0 se start hota hai

let myCreatedDate = new Date("2025-04-24")
// console.log(myCreatedDate.toLocaleString()); issme month 1 se start hota hai

let myTimeStap = Date.now()

// console.log(myTimeStap);

// console.log(myCreatedDate.getTime());

// console.log(math.floor(Date.now()/1000))i; // seconds


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
