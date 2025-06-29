function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
    if (computerChoice === 1) {
        return "Rock";
    }
    else if (computerChoice === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (rock/paper/scissor)");
    return humanChoice;
}
