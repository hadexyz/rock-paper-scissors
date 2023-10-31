console.log("script.js connected succesfully")


function getComputerChoice() {
    let RNG = Math.floor(Math.random() * 3 + 1);
    switch (RNG) {
        case 1:
            console.log("AI Chosen rock")
            return("rock");
        case 2:
            console.log("AI Chosen paper")
            return("paper");
        case 3:
            console.log("AI Chosen Scissors")
            return("scissors");
    }
}
function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection == computerSelection) {
        return "tied"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "won"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "won"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "won"
    }
    else {
        return "lost"
    }
}

function game () {
    let score = 0
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Let's play RPS! What's your choice?")
        let computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
        if (playRound(playerSelection, computerSelection) == "won") {
            score++
        }
        if (playRound(playerSelection, computerSelection) == "lost") {
            score--
        }
        console.log(`Current score: ${score}`)
    }
console.log("Game ended!")
}
game()