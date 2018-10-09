const functions = require('firebase-functions')
const express = require('express')
const basicAuth = require('basic-auth-connect')

const app = express()

app.use(basicAuth('admin', 'blueoil'))

app.get('/auth', (req, res) => {
  res.redirect('/HzrgN3KTNqBuYYfWPN9rEAWGMRY09V8rzBX0dOyeEQr7zH83hEYBa0FdYdjQJ3Ud/index.html')
})

exports.app = functions.https.onRequest(app)
