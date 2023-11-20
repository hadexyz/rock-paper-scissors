console.log("script.js connected succesfully")


function getComputerChoice() {
    let RNG = Math.floor(Math.random() * 3 + 1);
    switch (RNG) {
        case 1:
            console.log("AI Choses rock")
            return("rock");
        case 2:
            console.log("AI Choses paper")
            return("paper");
        case 3:
            console.log("AI Choses scissors")
            return("scissors");
    }
}
function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection.toLowerCase() == 'rock' ||
        playerSelection.toLowerCase() == 'paper' || 
        playerSelection.toLowerCase() == 'scissors'){
        if (playerSelection.toLowerCase() == computerSelection) {
            return `tie`
        }
        else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
            return "win"
        }
        else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
            return "win"
        }
        else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
            return "win"
        }
        else {
            return "lose"
        }
    }
    else {
        console.log("invalid answer")
    }

}

function game () {
    let score = 0
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Let's play 5 rounds of Rock Paper Scissors! \
What's your choice?")
        console.log(`Player Choses ${playerSelection}`)
        let computerSelection = getComputerChoice()
        if (playRound(playerSelection, computerSelection) == "win") {
            score++
            console.log(`${playerSelection} beats ${computerSelection}!`)
        }
        if (playRound(playerSelection, computerSelection) == "lose") {
            console.log(`${playerSelection} loses to ${computerSelection}.. Sorry`)
            score--
        }
        if (playRound(playerSelection, computerSelection) == "tie") {
            console.log(`${playerSelection} ties with ${computerSelection}!`)
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