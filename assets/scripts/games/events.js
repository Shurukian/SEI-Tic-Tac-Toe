'use strict'

const ui = require('./ui')
const api = require('./api')
// const store = require('../store')

let gameData = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
let over = false

// function cellClick (event) {
//   const cell = $(event.target)
//   console.log('clicked')
//   cell.css('background', 'transparent').text(currentPlayer)
// }

const onNewGame = function (event) {
  event.preventDefault()
  $('#gameboard').show()
  $('#Game-Message').hide()
  // const form = event.target
  // const data = getFormFields(form)

  api.newGame()
    .then(ui.onNewGameSuccess)
    .then(() => $('#gameboard').on('click', onUpdateGame))
    .then(() => { over = false })
    .then(() => { gameData = ['', '', '', '', '', '', '', '', ''] })
    .then(() => { currentPlayer = 'X' })
    .catch(ui.onError)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  // when you click it will update the data in the game data array
  const cellIndex = event.target.id
  $(event.target).text(currentPlayer)
  console.log()

  gameData[cellIndex] = currentPlayer

  // everytime the data is passed into the gamedata array check for winner
  checkWinner()

  // passes the data playGames
  const data = {
    game: {
      cell: {
        index: cellIndex,
        value: currentPlayer
      },
      over: over
    }
  }

  // change the player after
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  // sends the data to the api
  api.updateGame(data)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onError)
}

// arrays for the win conditions of the games
const checkWinner = () => {
  // rows of winners
  if (gameData[0] !== '' && gameData[0] === gameData[1] && gameData[1] === gameData[2]) {
    over = true
    $('#gameboard').off('click')
    $('#Game-Message').show()
    $('#Game-Message').html(`
    <h2>${currentPlayer} is the winner!</h2>
    `)
  } else if (gameData[3] !== '' && gameData[3] === gameData[4] && gameData[4] === gameData[5]) {
    over = true
    $('#gameboard').off('click')
    $('#Game-Message').show()
    $('#Game-Message').html(`
    <h2>${currentPlayer} is the winner!</h2>
    `)
  } else if (gameData[6] !== '' && gameData[6] === gameData[7] && gameData[7] === gameData[8]) {
    over = true
    $('#gameboard').off('click')
    $('#Game-Message').show()
    $('#Game-Message').html(`
    <h2>${currentPlayer} is the winner!</h2>
    `)
    // columns of winners
  } else if (gameData[0] !== '' && gameData[0] === gameData[3] && gameData[3] === gameData[6]) {
    over = true
    $('#gameboard').off('click')
    $('#Game-Message').show()
    $('#Game-Message').html(`
    <h2>${currentPlayer} is the winner!</h2>
    `)
  } else if (gameData[1] !== '' && gameData[1] === gameData[4] && gameData[4] === gameData[7]) {
    over = true
    $('#gameboard').off('click')
    $('#Game-Message').show()
    $('#Game-Message').html(`
    <h2>${currentPlayer} is the winner!</h2>
    `)
  } else if (gameData[2] !== '' && gameData[2] === gameData[5] && gameData[5] === gameData[8]) {
    over = true
    $('#gameboard').off('click')
    $('#Game-Message').show()
    $('#Game-Message').html(`
    <h2>${currentPlayer} is the winner!</h2>
    `)
    // diagonal winners
  } else if (gameData[0] !== '' && gameData[0] === gameData[4] && gameData[4] === gameData[8]) {
    over = true
    $('#gameboard').off('click')
    $('#Game-Message').show()
    $('#Game-Message').html(`
    <h2>${currentPlayer} is the winner!</h2>
    `)
  } else if (gameData[2] !== '' && gameData[2] === gameData[4] && gameData[4] === gameData[6]) {
    over = true
    $('#gameboard').off('click')
    $('#Game-Message').show()
    $('#Game-Message').html(`
    <h2>${currentPlayer} is the winner!</h2>
    `)
  } else if (gameData.indexOf('') === -1) {
    over = true
    $('#gameboard').off('click')
    $('#Game-Message').show()
    $('#Game-Message').html(`
    <h2>The Game is a Tie!</h2>
    `)
  }
  // if (over === true) {
  //   $('#Game-Message').show()
  //   $('#Game-Message').html(`
  //   <h2>${currentPlayer} is the winner!</h2>
  //   `)
  // }

  // for (x = 0; x < gameData.length; x++) {
  //   for (o = 0; o < gameData.length; o++) {
  //     if (gameData[x][o] === '') {
  //       return false
  //     }
  //   }
  //   return true
  // }
}

// // horizontal cells
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   // vertical cells
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   // diagonal cells
//   [0, 4, 8],
//   [2, 4, 6]

// function to show the variable change between players.

// we want to have the ability to select all of the data-cell-index divs
// I was able to find how to target the cells in an Array easier at the link
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
// const dataCells = document.querySelectorAll('[data-cell-index]')

// selector to click on the box and make it an X or an O
// need to be able to loop through all of the cells to play the game
// This will access all of the boxes in the array for the game board and allow
// a click to happen on the dataCells variable one time. Found this on StackOverFlow :
// https://stackoverflow.com/questions/38781349/how-to-make-onclick-event-to-work-only-once
// dataCells.forEach(cell => {
//   cell.addEventListener('click', cellClick, { once: true })
// })

// ability to make a move on the board
// ability to switch between turns for X and O
// Determine whether there is a win, loss or draw

module.exports = {
  onNewGame,
  onUpdateGame
}
