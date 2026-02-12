// Get computer choice through random number

const playerScoreEl = document.querySelector("#player-score");
const computerScoreEl = document.querySelector("#computer-score");
const rockBtnEl = document.querySelector("#rock");
const paperBtnEl = document.querySelector("#paper");
const scissorsBtnEl = document.querySelector("#scissors");
const mainContainerEl = document.querySelector(".main-container");
const roundResultEl = document.createElement("p");
mainContainerEl.appendChild(roundResultEl);
const gameResultEl = document.createElement("p");
mainContainerEl.appendChild(gameResultEl);
gameResultEl.style.fontWeight = "bold";
gameResultEl.style.fontSize = "18px";

const getComputerChoice = function () {
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice;

  if (randomNum === 0) {
    computerChoice = "rock";
  } else if (randomNum === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    roundResultEl.textContent = "Computer wins! Paper beats rock";
    computerScore++;
    computerScoreEl.textContent = computerScore;
    playerScoreEl.textContent = humanScore;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    roundResultEl.textContent = "You win! Paper beats rock";
    playerScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    roundResultEl.textContent = "Computer wins! Rock beats scissors";
    computerScoreEl.textContent = computerScore;
    playerScoreEl.textContent = humanScore;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    roundResultEl.textContent = "You win! Scissors beats paper";
    playerScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    roundResultEl.textContent = "You win! Rock beats Scissors";
    playerScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    roundResultEl.textContent = "Computer wins! Scissors beats paper";
    computerScoreEl.textContent = computerScore;
    playerScoreEl.textContent = humanScore;
  } else if (humanChoice === computerChoice) {
    roundResultEl.textContent = `Try again, you both picked ${humanChoice}!`;
    computerScoreEl.textContent = computerScore;
    playerScoreEl.textContent = humanScore;
  }
  if (humanScore === 5) {
    gameResultEl.textContent = "You win! You were the first to score 5 points!";
    humanScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
  } else if (computerScore === 5) {
    gameResultEl.textContent =
      "You lose! Computer was the first to score 5 points!";
    humanScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
  }
}

function playGame() {
  rockBtnEl.addEventListener("click", () => {
    gameResultEl.textContent = "";
    playRound("rock", getComputerChoice());
  });

  paperBtnEl.addEventListener("click", () => {
    gameResultEl.textContent = "";
    playRound("paper", getComputerChoice());
  });

  scissorsBtnEl.addEventListener("click", () => {
    gameResultEl.textContent = "";
    playRound("scissors", getComputerChoice());
  });
}

let humanScore = 0;
let computerScore = 0;
playerScoreEl.textContent = humanScore;
computerScoreEl.textContent = computerScore;

playGame();
