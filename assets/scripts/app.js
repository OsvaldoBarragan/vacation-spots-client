'use strict'

const authentication = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.authenticated').hide()
  $('#sign-in').hide()
  $('#open-signup').hide()
  $('#with-open-signup').hide()

  $('#open-login').on('click', function () {
    $('#sign-up').hide()
    $('#open-login').hide()
    $('#with-open-login').hide()
    $('#sign-in').show()
    $('#open-signup').show()
    $('#with-open-signup').show()
  })
  $('#open-signup').on('click', function () {
    $('#sign-in').hide()
    $('#open-signup').hide()
    $('#with-open-signup').hide()
    $('#sign-up').show()
    $('#open-login').show()
    $('#with-open-login').show()
  })

  $('#sign-up').on('submit', authentication.onSignUp)
  $('#sign-in').on('submit', authentication.onSignIn)
  $('#password-change').on('submit', authentication.onPasswordChange)
  $('#sign-out').on('click', authentication.onSignOut)
  $('#location-creator').on('submit', authentication.onCreateLocation)
  $('#update-locations').on('submit', authentication.onUpdateLocation)
  $('#all-locations').on('click', authentication.onShowAllLocations)

  $('#show-locationCreator').on('click', function () {
    $('#location-creator').toggle()
    $('#locationlist-instructions').hide()
    $('#location-list').hide()
    $('#name').hide()
    $('#country').hide()
    $('#locationID').hide()
    $('#activities').hide()
    $('#cuisines').hide()
    $('#update-locations').hide()
    $('#password-change').hide()
  })

  $('#show-updateLocation').on('click', function () {
    $('#update-locations').toggle()
    $('#locationlist-instructions').hide()
    $('#location-list').hide()
    $('#name').hide()
    $('#country').hide()
    $('#locationID').hide()
    $('#activities').hide()
    $('#cuisines').hide()
    $('#location-creator').hide()
    $('#password-change').hide()
  })

  $('#show-changePassword').on('click', function () {
    $('#password-change').toggle()
    $('#locationlist-instructions').hide()
    $('#update-locations').hide()
    $('#location-list').hide()
    $('#name').hide()
    $('#country').hide()
    $('#locationID').hide()
    $('#activities').hide()
    $('#cuisines').hide()
    $('#location-creator').hide()
  })
})
