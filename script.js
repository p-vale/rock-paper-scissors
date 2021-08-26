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


//use the round1 function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end
function game() {

    //play 5 rounds
    for (let i = 5; i > 0; i--) {

        //ask the user to choose
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

game();