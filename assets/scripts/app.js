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
  $('#get-games').hide()

  // all of the authentication events handlers
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  // all of the game event handlers
  $('#new-game-form').on('submit', gameEvents.onNewGame)
  $('#get-games').on('submit', gameEvents.onGetGames)

  // all of the event listeners for the game board
  $('#box0').on('click', gameEvents.box0)
  // $('#box1').on('click', gameEvents.box1)
  // $('#box2').on('click', gameEvents.box2)
  // $('#box3').on('click', gameEvents.box3)
  // $('#box4').on('click', gameEvents.box4)
  // $('#box5').on('click', gameEvents.box5)
  // $('#box6').on('click', gameEvents.box6)
  // $('#box7').on('click', gameEvents.box7)
  // $('#box8').on('click', gameEvents.box8)
})
