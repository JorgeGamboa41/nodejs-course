'use strict'

const express = require('express')
const bodyParser = require('body-parser') //Middleware 'body-parser' que nos permitirá tratar los datos que recibamos desde el cliente a través de las peticiones HTTP.
const app = express()
const api = require('./routes')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app