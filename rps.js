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

console.log("The computer chose: " + getComputerChoice() + ".\n");
