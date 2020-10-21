'use strict'
const store = require ('../store')

const signUpSuccess = function (res) {
  $('#message').text('Thanks for signing up ' + res.user.email)
}
const signUpFailure = function (err) {
  $('#message').text('Your sign up failed, try again')
}
const signInSuccess = function (res) {
  $('#message').text('You are signed in and ready to play!')
  store.user = res.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#new-game-form').show()
}
const signInFailure = function (err) {
  $('#message').text('Your sign in has failed, Please try again.')
}
const signOutSuccess = function (res) {
  $('#message').text('We hope to see you back soon!')
  store.user = null
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#new-game-form').hide()
  $('#form').trigger('reset')

}
const signOutFailure = function (err) {
  $('#message').text('Your sign out has failed, Please try again.')
}
const changePasswordSuccess = function (res) {
  $('#message').text('You have successfully changed your password!')
}
const changePasswordFailure = function (err) {
  $('#message').text('Your password change has failed, Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
