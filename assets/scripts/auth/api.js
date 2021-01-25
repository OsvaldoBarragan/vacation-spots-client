const config = require('./../config')
const store = require('./../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createLocation = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showAllLocations = function () {
  return $.ajax({
    url: config.apiUrl + '/locations',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateLocation = function (formData, id) {
  return $.ajax({
    url: config.apiUrl + '/locations/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createReview = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateReview = function (formData, id) {
  return $.ajax({
    url: config.apiUrl + '/reviews/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteReview = function (formData, id) {
  return $.ajax({
    url: config.apiUrl + '/reviews/' + id,
    method: 'DELETE',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createLocation,
  showAllLocations,
  updateLocation,
  createReview,
  updateReview,
  deleteReview
}
