'use strict'

let apiUrl
const apiUrls = {
  production: 'https://salty-mountain-37132.herokuapp.com',
  development: 'http://localhost:5000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
