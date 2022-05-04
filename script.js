let userWins = 0
let pcWins = 0
yourWins.innerHTML = userWins
computerWins.innerHTML = pcWins


function pcPlay () {
  const rps = ['rock', 'paper', 'scissors']
  return rps[ Math.floor(Math.random() * rps.length) ]
}

function round (user, pc) {
  if (user === pc) {
    roundResult.innerHTML = 'It\'s a draw'
    return
  }
  // user wins
  if (user === 'paper' && pc === 'rock') {
    userWins++
    roundResult.innerHTML = 'You won this round: ' + user + ' beats ' + pc
    return

  } else if (user === 'rock' && pc === 'scissors') {
    userWins++
    roundResult.innerHTML = 'You won this round: ' + user + ' beats ' + pc
    return

  } else if (user === 'scissors' && pc === 'paper') {
    userWins++
    roundResult.innerHTML = 'You won this round: ' + user + ' beats ' + pc
    return
  // computer wins
  } else {
    pcWins++
    roundResult.innerHTML = 'You lost this round: ' + pc + ' beats ' + user
    return
  }
}

function testWinner () {
  if (userWins < 5 && pcWins < 5){
    yourWins.innerHTML = userWins
    computerWins.innerHTML = pcWins
  } else if (userWins == 5 | pcWins == 5) {
    winner(userWins, pcWins)
  }
}

function winner (user, pc) {
  const displayWinner = document.getElementById('container')
  displayWinner.innerHTML = ''

  if (user === 5) {
    let win = document.createElement('h2')
      win.innerHTML = 'You win!'
    displayWinner.appendChild(win)
  } else if (pc === 5) {
    let lose = document.createElement('h2')
      lose.innerHTML = 'You lose!'
    displayWinner.appendChild(lose)
  }
  // after announcing winner add reload button
  let playAgain = document.createElement('button')
  playAgain.innerHTML = 'Play again'
  playAgain.style.marginTop = '20px'
  playAgain.style.width = '150px'
  playAgain.onclick = () => { window.location.reload() }
  displayWinner.appendChild(playAgain)
  return
}

// EVENT LISTENERS
function addEventRound (select, choice) {
  const btn = document.querySelector(select)
  btn.addEventListener('click', () => {
    round( choice, pcPlay() )
  })
}
addEventRound('#r', 'rock')
addEventRound('#p', 'paper')
addEventRound('#s', 'scissors')

function addEventWinRound (element, event_name, func) {
  if (element.addEventListener) {
    element.addEventListener(event_name, func, false)
  } else if (element.attachEvent)  {
    element.attachEvent('on' + event_name, func)
  }
}

const allBtn = document.getElementById('buttons').childNodes

for (let i = 0; i < allBtn.length; i++) {
    addEventWinRound(allBtn[i], 'click', testWinner)
}
