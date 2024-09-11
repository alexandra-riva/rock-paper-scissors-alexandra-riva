let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

const playerText = document.querySelector("#playerChoice h3");
const computerText = document.querySelector("#computerChoice h3");
const resultText = document.querySelector("#result-text");
const playerScoreDisplay = document.querySelector("#playerScore h3");
const computerScoreDisplay = document.querySelector("#computerScore h3");
const roundsPlayedDisplay = document.querySelector("#rounds-played"); 
const choiceBtns = document.querySelectorAll(".btn");


function playRound(player, computer) {
  if (player === computer) {
    return "It's a draw!";
  } else if (
    (player === "ROCK" && computer === "SCISSORS") ||
    (player === "PAPER" && computer === "ROCK") ||
    (player === "SCISSORS" && computer === "PAPER")
  ) {
    playerScore++;
    return "You win!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

function playGame(player) {
  if (roundsPlayed < maxRounds) {
    const computer = getComputerChoice();
    const result = playRound(player, computer);

    playerText.textContent = `You chose: ${player}`;
    computerText.textContent = `Computer chose: ${computer}`;
    resultText.textContent = result;

    updateScoreDisplay();
    roundsPlayed++;
    roundsPlayedDisplay.textContent = roundsPlayed;
  }

  if (roundsPlayed === maxRounds) {
    checkWinner();
  }
}

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateScoreDisplay() {
  playerScoreDisplay.textContent = `Your score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
}

function checkWinner() {
  if (playerScore > computerScore) {
    alert("You are the winner!");
  } else if (playerScore < computerScore) {
    alert("Computer is the winner!");
  } else {
    alert("After 5 rounds, it's a draw!");
  }
}

choiceBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (roundsPlayed < maxRounds) {
      const playerChoice = button.textContent.toUpperCase();
      playGame(playerChoice);
    } else {
      alert("You've reached the end of the game. Hit refresh to try again!");
    }
  });
});
