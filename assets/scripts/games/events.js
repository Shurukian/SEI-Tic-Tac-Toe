'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui')
const api = require('./api')

const onNewGame = function (event) {
  event.preventDefault()
  console.log('New Game event')

  const form = event.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}
// ability to make a move on the board
const box0  = function () {

}
// variables for the players
// function to show the variable change between players.
// selector to click on the box and make it an X or an O
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
