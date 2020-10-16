'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui')
const api = require('./api')

const onSignUp = function (events) {
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

const onSignIn = function () {
  event.preventDefault()
}

module.exports = {
  onSignUp
}
