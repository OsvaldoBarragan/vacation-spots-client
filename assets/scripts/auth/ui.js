const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Account for ' + JSON.stringify(response.user.email) + ' has been created.')
  console.log('Success! Sign-up works!')
  $('form :input').val('')
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
  $('#password-change').hide()
  $('#locationlist-instructions').hide()
  $('.authenticated').show()
}

const signInFailure = function (error) {
  console.log('The user has failed to sign in. Error is: ' + error.responseJSON.message)
  $('#message').text('An error has occured. If you have an account, make sure both your email and password are correct. If not, sign up first.')
}

const changePasswordSuccess = function (response) {
  $('#message').text('The password has been successfully changed.')
  console.log('Password has changed.')
  $('form :input').val('')
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
  $('.location-information').hide()
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
  $('form :input').val('')
}

const createLocationFailure = function (error) {
  $('#message').text('Failed to create location.')
  console.log('Error is: ' + error.responseJSON.message)
}

const displayInformation = function (location) {
  $('#name').text('Location Name: ' + location.name)
  $('#country').text('Location Country: ' + location.country)
  $('#locationID').text('Location ID: ' + location._id)
  $('#activities').text('Location Activities: ' + location.activities)
  $('#cuisines').text('Location Cuisines: ' + location.cuisines)
}

const showAllLocationsSuccess = function (response) {
  console.log('response is: ' + JSON.stringify(response))
  $('#message').text('Locations shown below.')

  $('#locationlist-instructions').show()
  $('#location-list').show()
  $('#name').show()
  $('#country').show()
  $('#locationID').show()
  $('#activities').show()
  $('#cuisines').show()
  $('#location-creator').hide()
  $('#password-change').hide()
  $('#update-locations').hide()

  const locationsList = response.locations

  $('#location-list').empty()
  $('#name').empty()
  $('#country').empty()
  $('#locationID').empty()
  $('#activities').empty()
  $('#cuisines').empty()

  $('#locationlist-instructions').text('Click a location for more info!')

  // let openText = ''
  // loop through all of the locations
  for (let i = 0; i < locationsList.length; i++) {
    // create a div each time it loops
    const locationDiv = document.createElement('div')
    // add a class of `displayLocations` to each div that is created
    locationDiv.classList.add('displayLocations')
    // when a location div is clicked on, run displayActivities
    $(locationDiv).click(function () {
      console.log('Works')
      displayInformation(locationsList[i])
    })
    locationDiv.innerHTML = (locationsList[i].name + ', ' + locationsList[i].country)
    $('#location-list').append(locationDiv)
  }
}

const showAllLocationsFailure = function (error) {
  $('#message').text('Failed to show all locations.')
  console.log('Error is: ' + error.responseJSON.message)
}

const updateLocationSuccess = function () {
  $('#message').text('Location updated')
  // $('.authenticated').show()
  console.log('I made it here, UI')
  $('form :input').val('')
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
