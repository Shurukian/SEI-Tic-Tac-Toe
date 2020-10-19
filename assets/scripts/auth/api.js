'use strict'
const config = require('./../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  console.log('Sign out complete!')

  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const changePassword = function (data) {
  console.log('password change test')

  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
