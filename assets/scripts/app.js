'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')

$(() => {
  // hidden buttons to clean it up
  $('#sign-out-form').hide()
  $('#change-password-form').hide()
  $('#new-game-form').hide()

  // all of the authentication events handlers
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  // all of the game event handlers
  $('#new-game-form').on('submit', gameEvents.onNewGame)
  $('.get-games').on('submit', gameEvents.onGetGames)
})
