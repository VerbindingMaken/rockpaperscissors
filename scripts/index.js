/* PLAYER INPUT */
const inpChoice = document.querySelector("#inp-choice");
const btnInpChoice = document.querySelector("#btn-choice-submit");
const inputContainer = document.querySelector("#input-container");

/* FEEDBACK */
const feedbackCard = document.querySelector("#feedback-card");
const explainResult = document.querySelector("#txt-explain-result");
const winResult = document.querySelector("#txt-win-result");
const btnPlayGame = document.querySelector("#btn-play-game");

/* Start of game */
function startGame() {
    feedbackCard.style.display = "none";
    inputContainer.style.display = "flex";
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
            return showError();
      }
    // Hide input container 
    //return playerChoice;
    console.log(playerChoice);
    if(playerChoice) { inputContainer.hidden = true };
}
btnInpChoice.addEventListener('click', checkPlayerChoice);

/* Show message to player if input is wrong */
function showError() {
    explainResult.textContent = "You can only use one of these words: rock, paper, scissors";
    btnPlayGame.style.display = "none";
    winResult.textContent = "";
    feedbackCard.style.display = "flex";
    inpChoice.addEventListener('focus', removeError);
}
function removeError() {
    feedbackCard.style.display = "none";
    btnPlayGame.style.display = "block";
    inpChoice.removeEventListener('focus', removeError);
}
