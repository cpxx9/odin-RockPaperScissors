let playerChoice = '';
let cpuChoice = '';

let playerWinCount = game();
if(playerWinCount >= 3) {
    alert("You win!! You won " + playerWinCount + " out of 5 games!");
}
else {
    alert("You lost!! You only won " + playerWinCount + " out of 5 games!");
}

//Randomly generate a choice between rock, paper, and scissors for the computer
function getComputerChoice() {
    let RANDOMINT = 0;
    RANDOMINT = Math.floor(Math.random() * 3) + 1;
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

//check who wins,
function playRound(playerChoice, cpuChoice) {
    let gameResult = '';
    if(playerChoice === cpuChoice) {
        gameResult = 'It is a tie!!';
    }
    else if(playerChoice === 'rock' && cpuChoice === 'scissors') {
        gameResult = 'You win! Rock beats Scissors!';
        tieCheck = false;
    }
    else if(playerChoice === 'paper' && cpuChoice === 'rock') {
        gameResult = 'You win! Paper beats Rock!';
        tieCheck = false;
    }
    else if(playerChoice === 'scissors' && cpuChoice === 'paper') {
        gameResult = 'You win! Scissors beat Paper!';
        tieCheck = false;
    }
    else if(playerChoice === 'rock' && cpuChoice === 'paper') {
        gameResult = 'You lose! Paper beats Rock!';
        tieCheck = false;
    }
    else if(playerChoice === 'paper' && cpuChoice === 'scissors') {
        gameResult = 'You lose! Scissors beat Paper!';
        tieCheck = false;
    }
    else if(playerChoice === 'scissors' && cpuChoice === 'rock') {
        gameResult = 'You lose! Rock beats Scissors!';
        tieCheck = false;
    }

    return gameResult;
}

//make it a best of 5 series
function game() {
    let seriesCounter = 0;
    let result = '';
    for(let i = 0; i < 5; i++) {
        playerChoice = getUserChoice();
        cpuChoice = getComputerChoice();
        result = playRound(playerChoice, cpuChoice);
        alert(result);
        
        if(result.includes("win")) {
            seriesCounter++;
        }
    }
    return seriesCounter;
}