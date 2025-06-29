// Your First Interactive Game

let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
    //play 
    let playerchoice = prompt("Please enter your choice: rock, paper, or scissors");
    if(playerchoice){
        let playerone = playerchoice.trim().toLowerCase();
        if(playerone === "rock" || playerone === "paper" || playerone === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 +1);
            let computer = (computerChoice === 1) ? "rock"
                          : (computerChoice === 2) ? "paper"
                          : "scissors";

        let result = 
        playerone === computer ? "It's a tie!"
: (playerone === "rock" && computer === "paper") ? `playerone: ${playerone}\ncomputer: ${computer}\nComputer wins!`
: (playerone === "paper" && computer === "scissors") ? `playerone: ${playerone}\ncomputer: ${computer}\nComputer wins!`
: (playerone === "scissors" && computer === "rock") ? `playerone: ${playerone}\ncomputer: ${computer}\nComputer wins!`
:  `playerone: ${playerone}\ncomputer: ${computer}\nplayerOne wins!`
alert(result);  
let playAgain = confirm("Do you want to play again?");
 playAgain ? location.reload() : alert("Thanks for playing!");
        }  else {
            alert("Invalid choice! Please choose rock, paper, or scissors.");
        }
      } else{
        alert(" I guess you changed your mind!");
    }
}else {
    alert("Maybe next time!");
}