'use strict'
const config = require('./../config')
const store = require('../store')

const newGame = function (event) {
  console.log('a new game has been started')

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: data
  })
}

module.exports = {
  newGame
}
