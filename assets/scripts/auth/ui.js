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
  $('#location-creator').hide()
  $('#update-locations').hide()
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
  $('#location-list').hide()
  $('.unauthenticated').show()

  store.user = null
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('An error occured while signing out.')
  console.log('Error is: ' + error.responseJSON.message)
}

const createLocationSuccess = function (response) {
  $('#message').text('Location created')
  // console.log('The location was successfully created: ' + JSON.stringify(response))
  // console.log('The location shortened: ' + JSON.stringify(response.locations))
  store.locations = response.locations
}

const createLocationFailure = function (error) {
  $('#message').text('Failed to create location.')
  console.log('Error is: ' + error.responseJSON.message)
}

const showAllLocationsSuccess = function (response) {
  console.log('response is: ' + JSON.stringify(response))
  $('#message').text('Locations shown below.')

  const locationsList = response.locations
  let openText = ''

  for (let i = 0; i < locationsList.length; i++) {
    openText += JSON.stringify('id: ' + locationsList[i]._id + ', ' + 'name: ' +
  locationsList[i].name + ', ' + 'country: ' + locationsList[i].country + ', ' +
'activities: ' + locationsList[i].activities + ', ' + 'cuisines: ' + locationsList[i].cuisines +
', ' + 'imageUrl: ' + locationsList[i].imageUrl)
  }

  $('#location-list').text(openText)
  //   const displayAllLocations = function () {
  //     $('#location-id').text(response.locations[i]._id)
  //     $('#location-name').text(response.locations[i].name)
  //     $('#location-country').text(response.locations[i].country)
  //     $('#location-activities').text(response.locations[i].activities)
  //     $('#location-cuisines').text(response.locations[i].cuisines)
  //     $('#location-imageurl').text(response.locations[i].imageUrl)
  //   }
  //   console.log(displayAllLocations())
  // }
}

const showAllLocationsFailure = function (error) {
  $('#message').text('Failed to show all locations.')
  console.log('Error is: ' + error.responseJSON.message)
}

const updateLocationSuccess = function () {
  $('#message').text('Location updated')
  // $('.authenticated').show()
  console.log('I made it here, UI')
}

const updateLocationFailure = function () {
  console.log('Update Location Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createLocationSuccess,
  createLocationFailure,
  showAllLocationsSuccess,
  showAllLocationsFailure,
  updateLocationSuccess,
  updateLocationFailure
}
