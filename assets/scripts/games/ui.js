'use strict'
const store = require('../store')

const onNewGameSuccess = function (res) {
  $('#message').text('Lets the Game Begin!')
  console.log('play the game!')
  // store the game information to access later
  store.game = res.game
  // store the player information to know who played the game
  store.player = null
}

const onNewGameFailure = function (err) {
  $('#message').text('Your New Game is not ready, Please try again.')
}

// const onGetGamesSuccess = function (res) {
//   $('#message').text('Got the game Successfully!')
//
//   store.game = res.game
//   store.player = null
// }

// const onGetGamesFailure = function (err) {
//   $('#message').text('Unable to the GET game data')

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
  // onGetGamesSuccess,
  // onGetGamesFailure
}
