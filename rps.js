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
    let human_choice = "";

    // use input num to assign corresponding string to var
    switch (num) {
        case 1:
            human_choice = "rock";
            break;
        case 2:
            human_choice = "paper";
            break;
        case 3:
            human_choice = "scissors";
            break;
        default:
            console.log("Invalid Number");        
    }

    return human_choice;
}

console.log("The computer chose: " + getComputerChoice() + ".\n");
console.log("You chose: " + getHumanChoice() + ".\n");
