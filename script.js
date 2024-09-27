let choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.getElementById("info");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function updateScore(player, score) {
  player.innerHTML = score;
}
function playGame(userChoice) {
  const computer = getComputerChoice();

  if (userChoice == "rock" && computer == "scissors") {
    result_p.innerHTML = `You Win! Rock beat Scissors`;
    userScore++;
    updateScore(userScore_span, userScore);
  } else if (userChoice == "paper" && computer == "rock") {
    result_p.innerHTML = `You Win! Paper beat Rock`;
    userScore++;
    updateScore(userScore_span, userScore);
  } else if (userChoice == "scissors" && computer == "paper") {
    result_p.innerHTML = `You Win! Paper beat Rock`;
    userScore++;
    updateScore(userScore_span, userScore);
  } else if (computer == "rock" && userChoice == "scissors") {
    result_p.innerHTML = `You Lose! Rock beat Scissors`;
    computerScore++;
    updateScore(computerScore_span, computerScore);
  } else if (computer == "paper" && userChoice == "rock") {
    result_p.innerHTML = `You Lose! Paper beat Rock`;
    computerScore++;
    updateScore(computerScore_span, computerScore);
  } else if (computer == "scissors" && userChoice == "paper") {
    result_p.innerHTML = `You Lose! Scissors beat Paper`;
    computerScore++;
    updateScore(computerScore_span, computerScore);
  } else {
    result_p.innerHTML = `It's tie`;
  }
}
