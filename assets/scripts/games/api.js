'use strict'
const config = require('./../config')
const store = require('../store')

const newGame = function (event) {
  console.log('a new game has been started')

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: {}
  })
}

const gameboard = function (event) {
  console.log('The game is being played')

  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'PATCH'
  })
}
// const getGames = function () {
//   console.log('Getting the game')
//
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${store.user.token}`
//     }
//   })
// }
module.exports = {
  newGame,
  // getGames
}
