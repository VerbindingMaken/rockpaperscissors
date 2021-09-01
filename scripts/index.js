/* PLAYER INPUT */
const inpChoice = document.querySelector("#inp-choice");
const btnInpChoice = document.querySelector("#btn-choice-submit");
const inputContainer = document.querySelector("#input-container");

/* FEEDBACK */
const feedback = document.querySelectorAll(".feedback");
const btnPlayGame = document.querySelector("#btn-play-game");
/* Start of game */
function startGame() {
    for(let i = 0; i < feedback.length; i++) {
        console.log(i);
        feedback[i].hidden = true;
    }
    inputContainer.hidden = false;
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
            console.log("Please type in: rock, paper or scissors");
            break;
      }
    // Hide input container 
    //return playerChoice;
    console.log(playerChoice);
    if(playerChoice) { inputContainer.hidden = true };
}
btnInpChoice.addEventListener('click', checkPlayerChoice);

/* Show message to player if input is wrong */
