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
            console.log("AI Chosen scissors")
            return("scissors");
    }
}
function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection.toLowerCase() == 'rock' || playerSelection.toLowerCase() == 'paper' || playerSelection.toLowerCase() == 'scissors'){
        if (playerSelection.toLowerCase() == computerSelection) {
            return `${playerSelection} ties with ${computerSelection}!`
        }
        else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
            return `Rock smashes scissors!`
        }
        else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
            return `Paper wraps rock!`
        }
        else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
            return "Scissors cuts paper!"
        }
        else {
            return "Sorry, but ya clearly lost.."
        }
    }
    else {
        console.log("invalid answer")
    }

}

function game () {
    let score = 0
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Let's play RPS! What's your choice?")
        console.log(`Player Chosen ${playerSelection}`)
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
    
    if (score == 5) {
        console.log("how the hell did you win ALL? Are you A HACKER")
    }
    else if (score == -5) {
        console.log("you literally lost all the games. Is your superpower losing?")
    }
    else if (score < 0) {
        console.log("Loser! take the L!")
    }
    else if (score == 0) {
        console.log("You tied with the bot! Guess you're average..")
    }
    else if (score > 0) {
        console.log("You... Won...")
    }
    else {
        console.log("you aren't supposed to get to see this message")
    }

}
game()