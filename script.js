let userWins = 0;
let computerWins = 0;


function computerPlay() {
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)]; 
}


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

function winner(user, pc) {
    if (user == 5) {
        console.log("You win!");
        return "You win!";
    } else if (pc == 5) {
        console.log("You lose!")
        return "You lose!";
    }
    return;
}


//EVENT LISTENERS
document.querySelector('#r').addEventListener("click", () => {
    round("rock", computerPlay());
    winner(userWins, computerWins)
});

document.querySelector('#p').addEventListener('click', () => {
    round("paper", computerPlay());
    winner(userWins, computerWins)
});

document.querySelector('#s').addEventListener('click', () => {
    round("scissors", computerPlay());
    winner(userWins, computerWins)
});

//Add a div for displaying results and change all of your console.logs into DOM methods.
const div = document.createElement('div'); 

//Display the running score,
//and announce a winner of the game once one player reaches 5 points.




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