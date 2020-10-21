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

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
