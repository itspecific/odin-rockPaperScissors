function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    //console.log(randomnumber);
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return `Tie, ${computerSelection} does not beat ${playerSelection}`;
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"){
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }
    else {
        return `You win ${playerSelection} beats ${computerSelection}`;
    }
   
}

function game () {

        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, Paper, or Scissors?","rock").toLowerCase();
        console.log(playRound(computerSelection, playerSelection));

}

game();
