function getComputerChoice () {
    //returns one of the following strings at random:
    //"rock", "paper", or "scissors"

    // create empty string variable
    let choice = "";

    // generate random number from 0-2 and store it in variable num
    const num = Math.floor(Math.random() * 3);

    //assign a string to empty var according to number selected
    switch (num) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }

    return choice;
}

function playRound (humanChoice, computerChoice) {
    // plays a single round of RPS, logs result of round to console

    // display what each player picked
    roundSummary.textContent = `You picked ${humanChoice}, and the computer picked ${computerChoice}`; 

    const outcome = checkWinner(humanChoice, computerChoice);

    // print message and increment score based on outcome of round
    switch (outcome) {
        case 2:
            // tie game
            roundResult.textContent = "Draw"
            break;
        case 1:
            // human wins
            roundResult.textContent = "You won"
            humanScore += 1;
            break;
        case 0:
            // computer wins
            roundResult.textContent = "You lost"
            computerScore += 1;
    }

    //update score
    currentScore.textContent = `The score is: ${humanScore} - ${computerScore}`;
}

function checkWinner (humanChoice, computerChoice) {
    // returns 1 if human wins, 2 if tie, otherwise 0
    if (humanChoice == computerChoice) {
        return 2;
    } else if (
               (humanChoice == "rock" && computerChoice == "scissors")
            || (humanChoice == "paper" && computerChoice == "rock")
            || (humanChoice == "scissors" && computerChoice == "paper")
        ) {
                return 1;
    } else {
        return 0;
    }
}

// add eventListener to button selections
let selectionButtons = document.querySelectorAll(".human-selection");
console.log(selectionButtons);
selectionButtons.forEach(function(btn){
    const humanSelection = btn.textContent.toLowerCase();
    btn.addEventListener("click", function() {
        playRound(humanSelection, getComputerChoice())
    });
});

// store result elements into variables
let roundSummary = document.querySelector(".round-summary");
let roundResult = document.querySelector(".result-round");
let currentScore = document.querySelector(".score");
let gameResult = document.querySelector(".result-game");

let humanScore = 0;
let computerScore = 0;
