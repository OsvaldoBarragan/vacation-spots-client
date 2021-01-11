const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Account for ' + JSON.stringify(response.user.email) + ' has been created.')
  console.log('Success! Sign-up works!')
}

const signUpFailure = function (error) {
  console.log('Error is: ' + error.responseJSON.message)
  $('#message').text('An error has occured. Try again.')
}

const signInSuccess = function (response) {
  $('#message').text('Welcome, ' + JSON.stringify(response.user.email) + '.')
  console.log('The user has signed in.')

  store.user = response.user

  $('.unauthenticated').hide()
  $('.authenticated').show()
}

const signInFailure = function (error) {
  console.log('The user has failed to sign in. Error is: ' + error.responseJSON.message)
  $('#message').text('An error has occured. If you have an account, make sure both your email and password are correct. If not, sign up first.')
}

const changePasswordSuccess = function (response) {
  $('#message').text('The password has been successfully changed.')
  console.log('Password has changed.')
}

const changePasswordFailure = function (error) {
  $('#message').text('An error occured while changing your password.')
  console.log('Error is: ' + error.responseJSON.message)
}

const signOutSuccess = function (response) {
  $('#message').text('You have signed out.')
  setTimeout(function () {
    $('#message').text('')
  }, 3000)

  console.log('User has signed out.')

  $('.authenticated').hide()
  $('.unauthenticated').show()

  store.user = null
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('An error occured while signing out.')
  console.log('Error is: ' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}