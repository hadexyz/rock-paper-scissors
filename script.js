console.log("script.js connected succesfully")


function getComputerChoice() {
    let RNG = Math.floor(Math.random() * 3 + 1);
    console.log(`Random number generated:${RNG}`)
    switch (RNG) {
        case 1:
            return("Rock");
        case 2:
            return("Paper");
        case 3:
            return("Scissor");
    }
}
function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));