const playerSelection = prompt("Rock, Paper, or Scissors?","rock").toLowerCase();

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

const computerSelection = getComputerChoice();


// 0 is tie - 1 is computerwin - 2 is playerwin

function playRound (computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return 0;
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"){
        return 1;
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        return 1;
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        return 1;
    }
    else {
        return 2;
    }
}


//getComputerChoice();