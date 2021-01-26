const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Account for ' + JSON.stringify(response.user.email) + ' has been created.')
  $('form :input').val('')
}

const signUpFailure = function () {
  $('#message').text('An error has occured. Try again.')
}

const signInSuccess = function (response) {
  $('#message').text('Welcome, ' + JSON.stringify(response.user.email) + '.')

  store.user = response.user

  $('.unauthenticated').hide()
  $('#location-creator').hide()
  $('#update-locations').hide()
  $('#password-change').hide()
  $('#location-list').hide()
  $('#locationlist-instructions').hide()
  $('#review-creator').hide()
  $('#update-review').hide()
  $('#delete-review').hide()
  $('.authenticated').show()
}

const signInFailure = function () {
  $('#message').text('An error has occurred. If you have an account, make sure both your email and password are correct. If not, sign up first.')
}

const changePasswordSuccess = function (response) {
  $('#message').text('The password has been successfully changed.')
  $('form :input').val('')
}

const changePasswordFailure = function () {
  $('#message').text('An error occurred while changing your password.')
}

const signOutSuccess = function (response) {
  $('#message').text('You have signed out.')
  setTimeout(function () {
    $('#message').text('')
  }, 3000)

  $('.authenticated').hide()
  $('#location-list').hide()
  $('.location-information').hide()
  $('.unauthenticated').show()

  store.user = null
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#message').text('An error occured while signing out.')
}

const createLocationSuccess = function (response) {
  $('#message').text('Location created')
  store.locations = response.locations
  $('form :input').val('')
}

const createLocationFailure = function () {
  $('#message').text('Failed to create location.')
}

const displayInformation = function (location, review) {
  $('#name').text('Location Name: ' + location.name)
  $('#country').text('Location Country: ' + location.country)
  $('#locationID').text('Location ID: ' + location._id)
  $('#activities').text('Location Activities: ' + location.activities)
  $('#cuisines').text('Location Cuisines: ' + location.cuisines)
  $('#reviews').empty()

  for (let i = 0; i < location.reviews.length; i++) {
    const reviewDiv = document.createElement('div')
    reviewDiv.classList.add('displayReviews')
    reviewDiv.innerHTML = ('reviewID: ' + location.reviews[i]._id + '<br /> Rating:' + location.reviews[i].rating + '<br />' +
    ' Title: ' + location.reviews[i].title + '<br />' + 'Content: ' + location.reviews[i].content)
    $('#reviews').append(reviewDiv)
  }
}

const showAllLocationsSuccess = function (response) {
  $('#message').text('Locations shown below.')

  $('#locationlist-instructions').show()
  $('#location-list').show()
  $('#name').show()
  $('#country').show()
  $('#locationID').show()
  $('#activities').show()
  $('#cuisines').show()
  $('#reviews').show()
  $('#location-creator').hide()
  $('#password-change').hide()
  $('#update-locations').hide()
  $('#review-creator').hide()
  $('#update-review').hide()
  $('#delete-review').hide()

  const locationsList = response.locations

  $('#location-list').empty()
  $('#name').empty()
  $('#country').empty()
  $('#locationID').empty()
  $('#activities').empty()
  $('#cuisines').empty()
  $('#reviews').empty()

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
      displayInformation(locationsList[i])
    })
    locationDiv.innerHTML = (locationsList[i].name + ', ' + locationsList[i].country)
    $('#location-list').append(locationDiv)
  }
}

const showAllLocationsFailure = function () {
  $('#message').text('Failed to show all locations.')
}

const updateLocationSuccess = function () {
  $('#message').text('Location updated')
  $('form :input').val('')
}

const updateLocationFailure = function () {
}

const createReviewSuccess = function (response) {
  $('#message').text('Review created')
}

const createReviewFailure = function () {
  $('#message').text('Failed to create review.')
}

const updateReviewSuccess = function (response) {
  $('#message').text('Review updated')
}

const updateReviewFailure = function () {
  $('#message').text('Failed to update review.')
}

const deleteReviewSuccess = function (response) {
  $('#message').text('Review deleted')
}

const deleteReviewFailure = function () {
  $('#message').text('Failed to update review.')
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
  updateLocationFailure,
  createReviewSuccess,
  createReviewFailure,
  updateReviewSuccess,
  updateReviewFailure,
  deleteReviewSuccess,
  deleteReviewFailure
}
