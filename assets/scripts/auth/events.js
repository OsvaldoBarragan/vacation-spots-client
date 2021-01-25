const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onPasswordChange = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateLocation = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createLocation(data)
    .then(ui.createLocationSuccess)
    .catch(ui.createLocationFailure)
}

const onShowAllLocations = function (event) {
  event.preventDefault()

  api.showAllLocations()
    .then(ui.showAllLocationsSuccess)
    .catch(ui.showAllLocationsFailure)
}

const onUpdateLocation = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const id = data.location._id

  api.updateLocation(data, id)
    .then(ui.updateLocationSuccess)
    .catch(ui.updateLocationFailure)
}

const onCreateReview = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createReview(data)
    .then(ui.createReviewSuccess)
    .catch(ui.createReviewFailure)
}

const onUpdateReview = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const id = data.review._id

  api.updateReview(data, id)
    .then(ui.updateReviewSuccess)
    .catch(ui.updateReviewFailure)
}

const onDeleteReview = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const id = data.review._id

  api.deleteReview(data, id)
    .then(ui.deleteReviewSuccess)
    .catch(ui.deleteReviewFailure)
}

module.exports = {
  onSignIn: onSignIn,
  onSignUp: onSignUp,
  onPasswordChange: onPasswordChange,
  onSignOut: onSignOut,
  onCreateLocation: onCreateLocation,
  onShowAllLocations: onShowAllLocations,
  onUpdateLocation: onUpdateLocation,
  onCreateReview: onCreateReview,
  onUpdateReview: onUpdateReview,
  onDeleteReview: onDeleteReview
}
