//Define Variables
let randomNumber = Math.floor(Math.random() * 3 ) + 1;
let playerSelection;
let log;
let string;

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
    return computerSelection;
}



function playRound(playerSelection, computerSelection) {   
    //Get computer selection
    computerSelection=getComputerChoice();
    //Get player selection
    playerSelection = prompt("Rock, Paper or Scissors?");
    //Format playerSelection
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log(playerSelection)
    //Compare player selection to computer selection
    if(computerSelection === "Rock") { 
        if(playerSelection === "Paper") {
            log = "You win! Paper beats Rock.";
        } else if(playerSelection === "Rock") {
            log = "You tied!";
        } else {
            log = "You lose! Rock beats Scissors.";
        }
    } else if(computerSelection === "Paper") {
        if(playerSelection === "Paper") {
            log = "You tied.";
        } else if(playerSelection === "Rock") {
            log = "You lose! Paper beats Rock.";
        } else {
            log = "You win! Scissors beats Paper.";
        }
    } else if(computerSelection === "Scissors") {
        if(playerSelection === "Scissors") {
            log = "You tied.";
        } else if(playerSelection === "Paper") {
            log = "You lose! Scissors beats Paper.";
        } else {
            log = "You win! Rock beats Scissors.";
        }
    }    
    //Message user win/lose
    console.log(log)
}

playRound()
