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



//getComputerChoice();