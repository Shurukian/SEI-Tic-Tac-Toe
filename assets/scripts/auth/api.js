'use strict'
const config = require('./../config')

const signUp = function (data) {
  console.log('data is', data)

  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp
}
