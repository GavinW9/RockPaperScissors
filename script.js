// Rock Paper Scissors

var buttonsArea = document.getElementById("btn-container");
var playerScoreEl = document.getElementById("pScore-container");
var computerScoreEl = document.getElementById("cScore-container");
var pScore = 0;
var cScore = 0;

// DO NOT MAKE ANY CHANGES TO THE PLAYGAME FUNCTION
function playGame(pChoice) {
  switch (pChoice) {
    case "rock":
      displayChoice("player-choice", "images/rock.png");
      break;
    case "paper":
      displayChoice("player-choice", "images/paper.png");
      break;
    case "scissors":
      displayChoice("player-choice", "images/scissors.png");
      break;
  }
  let cChoice = getCompChoice();
  let winner = getResult(pChoice, cChoice);

  showResult(winner);
  updateScore(winner);
  setTimeout(showChoices, 2000);
}

// DO NOT MAKE ANY CHANGES TO THE SHOWCHOICES FUNCTION
function showChoices() {
  buttonsArea.innerHTML = `
        <p>Make your choice</p><button class="choice" onclick="playGame('rock')">Rock</button>
        <button class="choice" onclick="playGame('paper')">Paper</button>
        <button class="choice" onclick="playGame('scissors')">Scissors</button>
    `;

  displayChoice("player-choice", "images/question.png");
  displayChoice("computer-choice", "images/question.png");
}

// ADD YOUR FUNCTIONS BELOW THIS LINE:
// ___________________________________
const displayChoice = (choice, img) => {
  document.getElementById(choice).src = img;
}

const getCompChoice = () => {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  displayChoice("computer-choice", `images/${choices[choice]}.png`);
  return choices[choice];
}

const getResult = (playerChoice, computerChoice) => {
  if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) return "player";
  else if ((computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper")) return "computer";
  else if (playerChoice == computerChoice) return "tie"
}

const showResult = (Winner) => {
  if (Winner == "player") buttonsArea.innerHTML = "The Player has won, get a winstreak.";
  else if (Winner == "computer") buttonsArea.innerHTML = "The Computer has won, get better at Rock Paper Scissors.";
  else if (Winner =="tie") buttonsArea.innerHTML = "The Game has tied, imagine getting a tie.";
}

const updateScore = (Winner) => {
  if (Winner == "player") pScore++;
  else if (Winner == "computer") cScore++;
  playerScoreEl.innerHTML = pScore;
  computerScoreEl.innerHTML = cScore;
}