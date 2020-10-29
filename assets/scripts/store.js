'use strict'

const store = {
  player: null,
  user: {},
  game: {},
  updateGame: {
    game: {
      cell: {
        index: null,
        value: 'x'
      },
      over: false
    }
  }
}

module.exports = store
