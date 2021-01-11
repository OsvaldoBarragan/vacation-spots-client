// const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Account, ' + response + ', has been created.')
  console.log('Success! Sign-up works!')
}

const onSignUpFailure = function (error) {
  console.log('Error is: ' + error.responseJSON.message)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
