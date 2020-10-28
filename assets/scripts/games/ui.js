'use strict'
const store = require('../store')

$('#game-display').html('')


const onNewGameSuccess = function (res) {
  $('#message').text('Lets the Game Begin!')
  console.log('play the game!')
  // store the game information to access later
  store.game = res.game
  // store the player information to know who played the game
  store.player = null

  $('form').trigger('reset')
}

const onError = function () {
  $('#error-message').text('An error has occured, Please try again.')

  $('form').trigger('reset')
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
  onError
  // onGetGamesSuccess,
  // onGetGamesFailure
}
