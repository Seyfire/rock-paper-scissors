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
        default:
            console.log("Invalid Number");        
    }

    return choice;
}

function getHumanChoice() {
    // returns string "rock", "paper", or "scissors" based on user input

    // create empty int variable
    let num = 0;

    // ask user to input 1, 2, or 3
    // parse to int & store it in var
    num = parseInt(prompt("Enter 1 for Rock, 2 for Paper, and 3 for Scissors"));

    // init empty string variable
    let humanChoice = "";

    // use input num to assign corresponding string to var
    switch (num) {
        case 1:
            humanChoice = "rock";
            break;
        case 2:
            humanChoice = "paper";
            break;
        case 3:
            humanChoice = "scissors";
            break;
        default:
            console.log("Invalid Number");        
    }

    return humanChoice;
}
function playRound (humanChoice, computerChoice) {
    // plays a single round of RPS, logs result of round to console

    //print message showing what each player picked
    console.log(
        "You picked: " + humanChoice + ".\nThe computer picked: "
        + computerChoice + ".\n"
    )

    // compare human vs computer choice, and store outcome in var
    const outcome = checkWinner(humanChoice, computerChoice);
    // print message and increment score based on outcome of round
    switch (outcome) {
        case 2:
            console.log("Tie game!\n");
            break;
        case 1:
            console.log("You Win!\n");
            humanScore = humanScore + 1;
            break;
        case 0:
            console.log("You lost :(\n");
            computerScore = computerScore + 1;
    }
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

let humanScore = 0;
let computerScore = 0;

playGame();
