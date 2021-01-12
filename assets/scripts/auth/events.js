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

// const onUpdateLocation = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const data = getFormFields(form)
//
//   api.updateLocation(data)
//     .then(ui.updateLocationSuccess)
//     .catch(ui.updateLocationFailure)
// }

module.exports = {
  onSignIn: onSignIn,
  onSignUp: onSignUp,
  onPasswordChange: onPasswordChange,
  onSignOut: onSignOut,
  onCreateLocation: onCreateLocation,
  onShowAllLocations: onShowAllLocations
}
