// Loops

// while Loop

let mynumber = 50;
while (mynumber < 50) {
    console.log(mynumber);
    mynumber++;
}
// it will not print anything because the condition is false

// do...while Loop

do{
    console.log(mynumber);
    mynumber++;
}
while (mynumber < 50);
// it will print 50 once because the condition is checked after the first iteration

// for Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// it will print 0 to 4

let counter = 0;
let name = "Ufffapoorv";
let myletter ;
while (true) {
    myletter = name[counter];
    console.log(myletter);;
    
    if (myletter === "r")
        break; // Exit the loop when there are no more letters
    counter++;
}