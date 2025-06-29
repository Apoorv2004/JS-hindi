// Conditional (ternary) operator
// Syntax: condition ? exprIfTrue : exprIfFalse 

let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." 
:"No, you cannot vote yet.";
console.log(canVote); // Output: Yes, you can vote.

// rock // paper scissors game
let playerone = "rock";
let playertwo = "paper";
let result = (playerone === playertwo) ? "It's a tie!"
: (playerone === "rock" && playertwo === "scissors") ? "Player one wins!"
: (playerone === "paper" && playertwo === "rock") ? "Player one wins!"
: (playerone === "scissors" && playertwo === "paper") ? "Player one wins!"
: (playertwo === "rock" && playerone === "scissors") ? "Player two wins!"
: (playertwo === "paper" && playerone === "rock") ? "Player two wins!"
: (playertwo === "scissors" && playerone === "paper") ? "Player two wins!"
: "Invalid input.";
console.log(result); // Output: Player two wins!