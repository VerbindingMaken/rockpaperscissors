/* PLAYER INPUT */
const inpChoice = document.querySelector("#inp-choice");
const btnInpChoice = document.querySelector("#btn-choice-submit");
const inputContainer = document.querySelector("#input-container");

/* Player choice */
const playerChoiceCard = document.querySelector("#player-choice-card");
const playerChoicePicture = document.querySelector("#player-choice-picture");
const playerChoiceWord = document.querySelector("#player-choice-word");

/* Computer choice */
const computerChoiceCard = document.querySelector("#computer-choice-card")
const computerChoicePicture = document.querySelector("#computer-choice-picture");
const computerChoiceWord = document.querySelector("#computer-choice-word");

/* FEEDBACK */
const feedbackCard = document.querySelector("#feedback-card");
const explainResult = document.querySelector("#txt-explain-result");
const winResult = document.querySelector("#txt-win-result");
const btnPlayGame = document.querySelector("#btn-play-game");

/* Keeping score */
const playerShowScore = document.querySelector("#player-score");
const computerShowScore = document.querySelector("#computer-score");

/* Explain rules */
const btnShowExplain = document.querySelector("#show-explain-rules");
const btnHideExplain = document.querySelector("#hide-explain-rules");
const dialogExplainRules = document.querySelector("#explain-rules-containter");

function showExplain() {
    btnHideExplain.style.display = "flex";
    dialogExplainRules.style.display = "flex";
}
function hideExplain() {
    btnHideExplain.style.display = "none";
    dialogExplainRules.style.display = "none";
}
btnShowExplain.addEventListener('click', showExplain);
btnHideExplain.addEventListener('click', hideExplain);

var playerScore = 0;
var computerScore = 0;

var options = [{
    name: "",
    src: "images/3017955_examination_inquiry_interrogation_investigation_poll_icon.svg",
    alt: "Question Mark",
    href: "https://www.iconfinder.com/iconsets/pinpoint-notifocation" }, {
    name: "rock",
    src: "images/2730260_harry_philosophers_potter_rock_solid_icon.svg",
    alt: "Rock",
    href: "https://www.iconfinder.com/search?q=rock&price=free" }, {
    name: "paper",
    src: "images/6351935_document_extension_file_folder_page_icon.svg",
    alt: "Paper",
    href: "https://www.iconfinder.com/search?q=paper&price=free"} , {
    name: "scissors",
    src: "images/326596_content_cut_scissors_icon.svg",
    alt: "Scissors",
    href: "https://www.iconfinder.com/search?q=scissors&price=free"
    } ];

/* Start of game */
function startGame() {
    feedbackCard.style.display = "none";
    inputContainer.style.display = "flex";
    playerChoiceCard.style.border = "none";
    computerChoiceCard.style.border = "none";
    showPlayerChoice(0);
    showComputerChoice(0);
    //Use form so "Enter" wil start game
    btnInpChoice.addEventListener('click', checkPlayerChoice);
}
btnPlayGame.addEventListener('click', startGame);
/* Receive input from player. Check input */
function checkPlayerChoice() {
    let playerInput = inpChoice.value;
    inpChoice.value = "";
    let playerText = playerInput.toLowerCase().trim();
    let playerChoice;
    switch (playerText) {
        case "rock":
            playerChoice = 1
            break;
        case "paper":
            playerChoice = 2
            break;
        case "scissors":
            playerChoice = 3
            break;
        default:
            showError();
            break;
      }
    // Hide input container 
    //return playerChoice;
    if (playerChoice) {
        inputContainer.style.display = "none";
        btnInpChoice.removeEventListener('click', checkPlayerChoice);
        let computerChoice = makeRndChoice();
        showComputerChoice(computerChoice);
        showPlayerChoice(playerChoice);
        setTimeout(showWinner, 1500, playerChoice, computerChoice);
    }
    
}

/* Show message to player if input is wrong */
function showError() {
    explainResult.textContent = "You can only use one of these words: rock, paper, scissors";
    btnPlayGame.style.display = "none";
    winResult.textContent = "";
    feedbackCard.style.border = "solid 6px var(--loose-red)";
    feedbackCard.style.display = "flex";
    inpChoice.addEventListener('focus', removeError);
}
function removeError() {
    feedbackCard.style.display = "none";
    feedbackCard.style.border = "none";
    btnPlayGame.style.display = "block";
    inpChoice.removeEventListener('focus', removeError);
}

/* Make a random choice for the computer */

function makeRndChoice() {
    let rndChoice = Math.floor(Math.random() * 3) + 1;
    return rndChoice;
}

/* Show player choice and computer choice with picture and word */
function showPlayerChoice(choiceNumber) {
    playerChoicePicture.src = options[choiceNumber].src;
    playerChoicePicture.alt = options[choiceNumber].alt;
    playerChoicePicture.href = options[choiceNumber].href;
    playerChoiceWord.textContent = options[choiceNumber].name;
}
function showComputerChoice(choiceNumber) {
    computerChoicePicture.src = options[choiceNumber].src;
    computerChoicePicture.alt = options[choiceNumber].alt;
    computerChoicePicture.href = options[choiceNumber].href;
    computerChoiceWord.textContent = options[choiceNumber].name;
}
/* Show the result of the game: who won? */
function showWinner(p, c) {
    winResult.textContent = "You've won this game!"
    playerChoiceCard.style.border = "solid 6px var(--win-green)";
    computerChoiceCard.style.border = "solid 6px var(--loose-red)";
    if (p === 1 && c === 2) {
        explainResult.textContent = "Paper covers rock";
        winResult.textContent = "The computer has won this time";
        playerChoiceCard.style.border = "solid 6px var(--loose-red)";
        computerChoiceCard.style.border = "solid 6px var(--win-green)";
        computerScore += 1;
    } else if (p === 1 && c === 3) {
        explainResult.textContent = "Rock crushes scissors";
        playerScore += 1;
    } else if (p === 2 && c === 1) {
        explainResult.textContent = "Paper covers rock";
        playerScore += 1;
    } else if (p === 2 && c === 3) {
        explainResult.textContent = "Scissors cuts paper";
        winResult.textContent = "The computer has won this time";
        playerChoiceCard.style.border = "solid 6px var(--loose-red)";
        computerChoiceCard.style.border = "solid 6px var(--win-green)";
        computerScore += 1;
    } else if (p === 3 && c === 1) {
        explainResult.textContent = "Rock crushes scissors"
        winResult.textContent = "The computer has won this time";
        playerChoiceCard.style.border = "solid 6px var(--loose-red)";
        computerChoiceCard.style.border = "solid 6px var(--win-green)";
        computerScore += 1;
    } else if (p === 3 && c === 2) {
        explainResult.textContent = "Scissors cuts paper";
        playerScore += 1;
    } else {
        explainResult.textContent = "It's a draw";
        winResult.textContent = "Play again";
        playerChoiceCard.style.border = "solid 6px var(--draw-yellow)";
        computerChoiceCard.style.border = "solid 6px var(--draw-yellow)";
    }
    btnPlayGame.style.display = "block";
    feedbackCard.style.display = "flex";
    playerShowScore.textContent = playerScore;
    computerShowScore.textContent = computerScore;
    if (playerScore + computerScore >= 5) {
        return setTimeout(endGame, 1500);
    }
}
function endGame() {
    explainResult.textContent = `You score ${playerScore} out of 5`
    playerChoiceCard.style.border = "none";
    computerChoiceCard.style.border = "none";
    btnPlayGame.removeEventListener('click', startGame);
    btnPlayGame.textContent = "Start over";
    if (playerScore > computerScore) {
        winResult.textContent = "You've won!!!";
        playerShowScore.color = "var(--win-green)";
        computerShowScore.color = "var(--loose-red)";
    }
    else {
        //Computer has won: Show Loose message
        winResult.textContent = "You've lost"
        playerShowScore.style.color = "var(--loose-red)";
        computerShowScore.style.color = "var(--win-green)";
    }
    //Button to reset the game: Start over
    btnPlayGame.addEventListener('click', resetGame);
}
function resetGame() {
    btnPlayGame.removeEventListener('click', resetGame);
    playerScore = 0;
    playerShowScore.textContent = "0";
    computerScore = 0;
    computerShowScore.textContent = "0";
    playerShowScore.style.color = "#444";
    computerShowScore.style.color = "#444";
    explainResult.textContent = "Play the game: Rock, Paper, Scissors. You will play against te computer.";
    winResult.textContent = "Best of 5!"
    btnPlayGame.textContent = "Play the game";
    btnPlayGame.addEventListener('click', startGame);
}