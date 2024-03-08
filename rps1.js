function compare(x, y) {
    if ((x === 'rock' && y === 'rock') || (x === 'paper' && y === 'paper') || (x === 'scissor' && y === 'scissor')) {
        return "draw";
    } else if ((x === 'rock' && y === 'scissor') || (x === 'paper' && y === 'rock') || (x === 'scissor' && y === 'paper')) {
        return "user wins";
    } else {
        return "computer wins";
    }
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let gameResult = "";

    for (let i = 0; i < 5; i++) {
        let userInput;
        while (!['rock', 'paper', 'scissor'].includes(userInput)) {
            userInput = prompt("Round "+ (i+1) +"\n\nPlease enter rock, paper, or scissor:").toLowerCase();
        }

        let computerInput = ['rock', 'paper', 'scissor'][Math.floor(Math.random() * 3)];
        // console.log("Random computer input:", computerInput);
        let roundResult = compare(userInput, computerInput);
        // console.log("Result of round", i + 1, ":", roundResult);

        gameResult += "Round " + (i + 1) + ":\nUser's choice: " + userInput + "\nComputer's choice: " + computerInput + "\nResult: " + roundResult + "\n\n";

        if (roundResult === "user wins") {
            userScore++;
        } else if (roundResult === "computer wins") {
            computerScore++;
        }
    }

    // console.log("Final Scores:\nUser:", userScore, "\nComputer:", computerScore);
    gameResult += "Final Scores:\nUser: " + userScore + "\nComputer: " + computerScore + "\n\n";

    if (userScore > computerScore) {
        gameResult += "User wins the game!";
    } else if (userScore < computerScore) {
        gameResult += "Computer wins the game!";
    } else {
        gameResult += "It's a tie!";
    }

    alert(gameResult);
}

playGame();
