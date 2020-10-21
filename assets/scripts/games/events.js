'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const ui = require('./ui')
const api = require('./api')

const onNewGame = function (event) {
  event.preventDefault()
  console.log('New Game event')

  const form = event.target
  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// const onGetGame = function (event) {
//   event.preventDefault()
//   console.log('Get Game event firing')
//
//   const form = event.target
//   const data = getFormFields(form)
//
//   api.getGames(data)
//   .then(ui.onGetGamesSuccess)
//   .catch(ui.onGetGamesFailure)
// }

module.exports = {
  onNewGame
}
