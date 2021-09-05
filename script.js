//Create three buttons, one for each selection.
//Add an event listener to the buttons that calls your playRound function 
//with the correct playerSelection every time a button is clicked
//(you can keep the console.logs for this step)

//Add a div for displaying results and change all of your console.logs into DOM methods.

//Display the running score,
//and announce a winner of the game once one player reaches 5 points.

let userWins = 0;
let computerWins = 0;

//begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)]; 
}

//compare in a single round of Rock Paper Scissors
function round(userSelection, computerSelection) {
    //draws
    if (userSelection === computerSelection) {
        console.log("It's a draw");
        return "It's a draw";
    }

    //user wins
    if (userSelection === "paper" && computerSelection === "rock") {
        console.log("You won this round");
        userWins++;
        return "You won this round " + userSelection + " beats " + computerSelection;

    } else if (userSelection === "rock" && computerSelection === "scissors") {
        console.log("You won this round");
        userWins++;
        return "You won this round " + userSelection + " beats " + computerSelection;

    } else if (userSelection === "scissors" && computerSelection === "paper") {
        console.log("You won this round");
        userWins++;
        return "You won this round " + userSelection + " beats " + computerSelection;
    
    //computer wins
    } else {
        console.log("You lost this round");
        computerWins++;
        return "You lost this round " + computerSelection + " beats " + userSelection;
    }

    console.log("Something is wrong");
    return "Something is wrong";
}


/* function game() {

    //play 5 rounds
    for (let i = 5; i > 0; i--) {

        //ASK USER TO CHOOSE
        let userChoice = prompt("Rock, paper, or scissors?");
        userChoice = userChoice.toLowerCase();
        console.log(userChoice);

        if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
            console.log(userChoice + " is an invalid input, try again");
            i++;
            continue;
        }

        //computer choice
        let computerChoice = computerPlay();
        console.log(computerChoice);

        //play round
        round(userChoice, computerChoice);
    }

    //compare wins and losses
    if (userWins > computerWins) {
        console.log("You win");
        return "You win";
    } else if (userWins < computerWins) {
        console.log("You lose");
        return "You lose";
    } else if (userWins == computerWins) {
        console.log("It's a draw");
        return "It's a draw";
    }

    console.log("Something is wrong");
    return "Something is wrong";
}

game(); */