/* PLAYER INPUT */
const inpChoice = document.querySelector("#inp-choice");
const btnInpChoice = document.querySelector("#btn-choice-submit");
const inputContainer = document.querySelector("#input-container");

/* Player choice */
const playerChoicePicture = document.querySelector("#player-choice-picture");
const playerChoiceWord = document.querySelector("#player-choice-word");

/* Computer choice */
const computerChoicePicture = document.querySelector("#computer-choice-picture");
const computerChoiceWord = document.querySelector("#computer-choice-word");

/* FEEDBACK */
const feedbackCard = document.querySelector("#feedback-card");
const explainResult = document.querySelector("#txt-explain-result");
const winResult = document.querySelector("#txt-win-result");
const btnPlayGame = document.querySelector("#btn-play-game");

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

/* Make a random choice for the computer */

function makeRndChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
}

/* Show player choice with picture and word */
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