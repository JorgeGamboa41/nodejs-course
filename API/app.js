'use strict'

const express = require('express')
const bodyParser = require('body-parser') //Middleware 'body-parser' que nos permitirá tratar los datos que recibamos desde el cliente a través de las peticiones HTTP.
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/api', api)
app.get('/login', (req, res) => {
    res.render('login')
})

module.exports = app