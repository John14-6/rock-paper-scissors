//Define Variables
let randomNumber = Math.floor(Math.random() * 3 ) + 1;
const playerSelection = "rock";
let computerSelection = "rock";


//Computer choose rock, paper or scissors
function getComputerChoice() {

    //Assign randomNumber to rock, paper or scissors
    if(randomNumber === 1) {
        computerSelection = "Rock";
    } else if(randomNumber === 2) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    } 
    console.log(computerSelection)
}

function playRound(playerSelection, computerSelection) {
    
}


