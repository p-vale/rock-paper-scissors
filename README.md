Simple rock-paper-scissors game

STEP 1
JS game working with console
completed on 26-aug

STEP 2
UI
05-sep switched to a new branch 'ui'

old game code

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