const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
const selectionDiv = document.getElementById("selection");
const resultDivElement = document.getElementById("result");
const playBtn = document.getElementById("play-button");

let userScore = 0;
let computerScore = 0;
let userChoice = null;

selectionDiv.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) {
        return;
    }
    userChoice = button.id;
    console.log("User choice:", userChoice);

    if (userChoice) {
        modifyBtnUI(button);
    }

});

function modifyBtnUI(btn) {

    // mark the user selection button
    //selectionDiv.querySelectorAll("button").forEach(btn => btn.style.backgroundColor = ""); // reset all buttons
    //button.style.backgroundColor = "lightblue"; // highlight selected button
    selectionDiv.querySelectorAll("button").forEach(btn => btn.style.opacity = "0.5");
    btn.style.opacity = "1";

}

// Randomly select Rock Paper or Scissors for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const pickRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer choice:", pickRandomChoice);
    return pickRandomChoice;
};


// Compare the user's selection with the computer's selection.
function getWinner(user, computer) {
    if (user === computer) {
        return "draw";
    }

    if (user === "rock" && computer === "scissors" ||
        user === "paper" && computer === "rock" ||
        user === "scissors" && computer === "paper") {
        return "user";
    }
    return "computer";
}


// Play the round and update the score and display the result
playBtn.addEventListener("click", () => {
    if (!userChoice) {
        resultDivElement.textContent = "⚠️ Please select rock, paper, or scissors!";
        /* alert("Please select Rock, Paper, or Scissors before playing!"); */
        return;
    }

    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    const emojis = { rock: "🪨", paper: "📄", scissors: "✂️" };

    if (winner === "draw") {
        resultDivElement.textContent = `Draw! Both chose ${emojis[userChoice]}`;
        resultDivElement.style.backgroundColor = "#fef3c7"; // yellow
    } else if (winner === "user") {
        userScore++;
        resultDivElement.textContent = `You win! ${emojis[userChoice]} beats ${emojis[computerChoice]}`;
        resultDivElement.style.backgroundColor = "#d1fae5"; // green
    } else {
        computerScore++;
        resultDivElement.textContent = `You lose! ${emojis[computerChoice]} beats ${emojis[userChoice]}`;
        resultDivElement.style.backgroundColor = "#fee2e2"; // red
    }

    // Update scores
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;

    // Reset selection
    userChoice = null;
    selectionDiv.querySelectorAll("button").forEach(btn => btn.style.opacity = "1");


});