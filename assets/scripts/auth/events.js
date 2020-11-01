'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui')
const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault()
  // get the form for the event that is happening
  const form = event.target
  // get the form data for the form of the event that is happening
  const data = getFormFields(form)

  // send data to the api
  api.signUp(data)
    // shows a successful response upon signup
    .then(ui.signUpSuccess)
    // shows the response for a failure on signup
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
