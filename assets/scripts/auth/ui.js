'use strict'
const signUpSuccess = function (res) {
  $('#message').text('Thanks for signing up ' + res.user.email)
}
const signUpFailure = function (res) {
  $('#message').text('Your sign up failed, try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
