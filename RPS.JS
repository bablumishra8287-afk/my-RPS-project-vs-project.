const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();

  const resultText = document.getElementById("result");
  const scoreText = document.getElementById("score");

  let message = "";

  if (playerChoice === computerChoice) {
    message = `🤝 It's a tie! You both chose ${playerChoice}.`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    message = `🎉 You win! ${formatChoice(playerChoice)} beats ${formatChoice(computerChoice)}.`;
  } else {
    computerScore++;
    message = `😢 You lost! ${formatChoice(computerChoice)} beats ${formatChoice(playerChoice)}.`;
  }

  resultText.textContent = message;
  scoreText.textContent = `👤 You: ${playerScore} | 💻 Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    setTimeout(() => {
      let winnerMessage =
        playerScore > computerScore
          ? "🏆 Congratulations! You are the ultimate winner! 🎊"
          : "💻 Computer wins the match! Better luck next time!";
      alert(winnerMessage);
      resetGame();
    }, 300);
  }
}

function formatChoice(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("result").textContent = "Make your move 👇";
  document.getElementById("score").textContent = "👤 You: 0 | 💻 Computer: 0";
}
