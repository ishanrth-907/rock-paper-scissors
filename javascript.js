let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
    if (computerChoice === 1) {
        return "rock";
    }
    else if (computerChoice === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (rock/paper/scissors)");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`Draw! You both drew ${humanChoice}!`);
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You Won! Rock beats Scissors!");
        humanScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You Won! Paper beats Rock!");
        humanScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You Won! Scissors beats Paper!");
        humanScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You Lost! Scissors beats Paper!");
        computerScore++;
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log("You Lost! Paper beats Rock!");
        computerScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You Lost! Rock beats Scissors!");
        computerScore++;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

