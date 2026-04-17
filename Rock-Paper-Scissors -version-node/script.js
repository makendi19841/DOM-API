let userScore = 0;
let computerScore = 0;
let userChoice = null;


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


// Determine the winner and update the scores.
function playGame() {
    if (!process.argv[2]) {
        console.log("⚠️ Please select rock, paper, or scissors!");
        return;
    }

    userChoice = process.argv[2].trim().toLowerCase();

    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    const emojis = { rock: "🪨", paper: "📄", scissors: "✂️" };

    if (winner === "draw") {
        console.log(`Draw! Both chose ${emojis[userChoice]}`);
    } else if (winner === "user") {
        userScore++;
        console.log(`You win! ${emojis[userChoice]} beats ${emojis[computerChoice]}`);
    } else {
        computerScore++;
        console.log(`You lose! ${emojis[computerChoice]} beats ${emojis[userChoice]}`);
    }

    // Update scores
    console.log(`Scores - User: ${userScore}, Computer: ${computerScore}`);


    // Reset selection
    userChoice = null;

};

playGame(); // Start the game when the script runs