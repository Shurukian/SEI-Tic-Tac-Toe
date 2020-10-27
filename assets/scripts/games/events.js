'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui')
const api = require('./api')

const onNewGame = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// need variables for the players for the game
const playerX = 'X'
const playerO = 'O'

// arrays for the win conditions of the games
const winCondition = [
// horizontal cells
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical cells
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal cells
  [0, 4, 8],
  [2, 4, 6]
]

// function to show the variable change between players.
// const changePlayer = function () {
//   playerX = !playerO
// }

// we want to have the ability to select all of the data-cell-index divs
// I was able to find how to target the cells in an Array easier at the link
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
const dataCells = document.querySelectorAll('[data-cell-index]')

// selector to click on the box and make it an X or an O
// need to be able to loop through all of the cells to play the game
// This will access all of the boxes in the array for the game board and allow
// a click to happen on the dataCells variable one time. Found this on StackOverFlow :
// https://stackoverflow.com/questions/38781349/how-to-make-onclick-event-to-work-only-once
dataCells.forEach(cell => {
  // I am very proud of this piece of code!
  cell.addEventListener('click', cellClick, { once: true })
})

// ability to make a move on the board
// ability to switch between turns for X and O
// Determine whether there is a win, loss or draw
function cellClick (event) {
  console.log('clicked')
  const cell = event.target
  const changePlayer = playerX ? playerO : playerX

// takeTurn is a fuction for the currentPlayer (playerX or playerO) to be able
// to make a move on the board.
  // takeTurn(cell, changePlayer)
  // changePlayer()
}

// const takeTurn = function (cell, changePlayer) {
//   cell.playerList.add(changePlayer)
// }

// const onGetGame = function (event) {
//   event.preventDefault()
//   console.log('Get Game event firing')
//
//   const form = event.target
//   const data = getFormFields(form)
//
//   api.getGames(data)
//   .then(ui.onGetGamesSuccess)
//   .catch(ui.onGetGamesFailure)
// }

module.exports = {
  onNewGame
}
