// Get computer choice through random number

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

// Play a game 5 rounds using for loop

const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;
  let humanChoice;
  let computerChoice;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log(
        "Computer wins! Paper beats rock." +
          "\nHuman Score: " +
          humanScore +
          "\nComputer Score: " +
          computerScore,
      );
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log(
        "You win! Paper beats rock." +
          "\nHuman Score: " +
          humanScore +
          "\nComputer Score: " +
          computerScore,
      );
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log(
        "Computer wins! Rock beats scissors." +
          "\nHuman Score: " +
          humanScore +
          "\nComputer Score: " +
          computerScore,
      );
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log(
        "You win! Scissors beats paper." +
          "\nHuman Score: " +
          humanScore +
          "\nComputer Score: " +
          computerScore,
      );
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log(
        "You win! Rock beats scissors." +
          "\nHuman Score: " +
          humanScore +
          "\nComputer Score: " +
          computerScore,
      );
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log(
        "Computer wins! Scissors beats paper." +
          "\nHuman Score: " +
          humanScore +
          "\nComputer Score: " +
          computerScore,
      );
    } else if (humanChoice === computerChoice) {
      console.log(
        "Try again, you both picked " +
          humanChoice +
          "!" +
          "\nHuman Score: " +
          humanScore +
          "\nComputer Score: " +
          computerScore,
      );
    }
  }

  for (let i = 0; i < 5; i++) {
    computerChoice = getComputerChoice();
    humanChoice = prompt(
      "Please pick Rock, Paper, or Scissors...Good luck!",
    ).toLowerCase();

    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(
      "You win! You beat the computer " +
        humanScore +
        " to " +
        computerScore +
        ".",
    );
  } else if (computerScore > humanScore) {
    console.log(
      "You lose! The computer beat you " +
        computerScore +
        " to " +
        humanScore +
        ".",
    );
  } else {
    console.log(
      "You both tied! Human Score: " +
        humanScore +
        " Computer Score: " +
        computerScore +
        ".",
    );
  }
};

playGame();
