
const playerChoice = getUserChoice();
const cpuChoice = getComputerChoice();

console.log(playRound(playerChoice, cpuChoice));

//Randomly generate a choice between rock, paper, and scissors for the computer
function getComputerChoice() {
    const RANDOMINT = Math.floor(Math.random() * 3) + 1;
    let cpuChoice = '';
    if(RANDOMINT === 1) {
        cpuChoice = 'rock';
    } 
    else if(RANDOMINT === 2) {
        cpuChoice = 'paper'; 
    }
    else {
        cpuChoice = 'scissors'
    }
    return cpuChoice;
}

//take a user input of Rock, Paper, or Scissors
//test to make sure the input is a legal move, and make the user re-input if not
function getUserChoice() {
    let testInput = false;
    let userChoice;
    while(testInput === false) {
        userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
            testInput = true;
        }
    }
    return userChoice;
}

//check who wins, only play one round 
function playRound(playerChoice, cpuChoice) {
    let gameResult = '';
    if(playerChoice === cpuChoice) {
        gameResult = 'It is a tie!!';
    }
    else if(playerChoice === 'rock' && cpuChoice === 'scissors') {
        gameResult = 'You win! Rock beats Scissors!';
    }
    else if(playerChoice === 'paper' && cpuChoice === 'rock') {
        gameResult = 'You win! Paper beats Rock!';
    }
    else if(playerChoice === 'scissors' && cpuChoice === 'paper') {
        gameResult = 'You win! Scissors beat Paper!';
    }
    else if(playerChoice === 'rock' && cpuChoice === 'paper') {
        gameResult = 'You lose! Paper beats Rock!';
    }
    else if(playerChoice === 'paper' && cpuChoice === 'scissors') {
        gameResult = 'You lose! Scissors beat Paper!';
    }
    else if(playerChoice === 'scissors' && cpuChoice === 'rock') {
        gameResult = 'You lose! Rock beats Scissors!';
    }
    return gameResult;
}

//make it a best of 5 series