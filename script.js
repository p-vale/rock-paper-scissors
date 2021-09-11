let userWins = 0;
let pcWins = 0;
yourWins.innerHTML = userWins;
computerWins.innerHTML = pcWins;


function pcPlay() {
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)]; 
}


function round(user, pc) {

    if (user === pc) {
        roundResult.innerHTML="It's a draw";
        return;
    }
    //user wins
    if (user === "paper" && pc === "rock") {
        userWins++;
        roundResult.innerHTML="You won this round: " + user + " beats " + pc;
        return;

    } else if (user === "rock" && pc === "scissors") {
        userWins++;
        roundResult.innerHTML="You won this round: " + user + " beats " + pc;
        return;

    } else if (user === "scissors" && pc === "paper") {
        userWins++;
        roundResult.innerHTML="You won this round: " + user + " beats " + pc;
        return;
    //computer wins
    } else {
        pcWins++;
        roundResult.innerHTML="You lost this round: " + pc + " beats " + user;
        return;
    }
}


function testWinner() {
    if (userWins < 5 && pcWins < 5){
        yourWins.innerHTML = userWins;
        computerWins.innerHTML = pcWins;
    } else if (userWins == 5 | pcWins == 5) {
        winner(userWins, pcWins);
    }
}


function winner(user, pc) {
    //clean up space for results
    const displayWinner = document.getElementById("container");
    displayWinner.innerHTML = "";

    if (user == 5) {
        let win = document.createElement("h2");
            win.innerHTML ="You win!";
        displayWinner.appendChild(win);
    } else if (pc == 5) {
        let lose = document.createElement("h2");
            lose.innerHTML = "You lose!";
        displayWinner.appendChild(lose);
    }
//after announcing winner add reload button
let playAgain = document.createElement("button");
    playAgain.innerHTML = "Play again";
    playAgain.style.marginTop = "20px";
    playAgain.style.width = "150px";
    playAgain.onclick = function() {window.location.reload()};
displayWinner.appendChild(playAgain);
return;
}

//EVENT LISTENERS
const btnR = document.querySelector('#r');
btnR.addEventListener("click", () => {
    round("rock", pcPlay());
});

const btnP = document.querySelector('#p');
btnP.addEventListener('click', () => {
    round("paper", pcPlay());
});

const btnS = document.querySelector('#s');
btnS.addEventListener('click', () => {
    round("scissors", pcPlay());
});

//testWinner with all buttons (it was less code by adding the line to each, but it is a useful test)
const allBtn = document.getElementById("buttons").childNodes;;

for (var i = 0; i < allBtn.length; i++) {
    addEvent(allBtn[i], "click", testWinner);
};

function addEvent(element, event_name, func) {
    if (element.addEventListener) {
        element.addEventListener(event_name, func, false); 
    } else if (element.attachEvent)  {
        element.attachEvent("on"+event_name, func);
    }
}