'use strict'
const store = require('../store')

$('#game-display').html('')

const onNewGameSuccess = function (res) {
  $('#message').html('Let the Game Begin!')
  $('#gameboard').show()
  $('#Game-Message').hide()
  // store the game information to access later
  store.game = res.game
  // this resets the text in the boxes
  $('.box').text('')
  // $('form').trigger('reset')
}

const onUpdateGameSuccess = function (res) {}

const onGetGamesSuccess = function (res) {
  const games = res.games
  $('#message').html(`
    <h2>${games.length} times have been played!</h2>
    `)

  store.game = res.game
  store.player = null
}

const onError = function () {
  $('#error-message').text('An error has occured, Please try again.')

  $('form').trigger('reset')
}

module.exports = {
  onNewGameSuccess,
  onUpdateGameSuccess,
  onGetGamesSuccess,
  onError
  // onGetGamesSuccess,
  // onGetGamesFailure
}
