// Get elements
const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
const resultElem = document.getElementById('result');
const choices = document.querySelectorAll('.choice');
const restartButton = document.getElementById('restart');

let playerScore = 0;
let computerScore = 0;

// Randomly select computer's choice
function getComputerChoice() {
    const choices = ['Stone', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Draw';
    }

    if (
        (playerChoice === 'Stone' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Stone') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        return 'Player';
    }

    return 'Computer';
}

// Update the score
function updateScore(winner) {
    if (winner === 'Player') {
        playerScore++;
    } else if (winner === 'Computer') {
        computerScore++;
    }

    playerScoreElem.textContent = playerScore;
    computerScoreElem.textContent = computerScore;
}

// Handle player choice
function handlePlayerChoice(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    // Display result
    resultElem.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${winner} wins!`;

    // Update score
    updateScore(winner);
}

// Handle restart game
function restartGame() {
    // Reset scores and result text
    playerScore = 0;
    computerScore = 0;
    playerScoreElem.textContent = playerScore;
    computerScoreElem.textContent = computerScore;
    resultElem.textContent = "";
}

// Add event listeners to buttons
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        handlePlayerChoice(choice.id);
    });
});

// Add event listener to restart button
restartButton.addEventListener('click', restartGame);


