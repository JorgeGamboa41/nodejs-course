'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if (err){
        console.log(`No se pudo conectar a la base de datos - ${err}`)
    }else{
       console.log('Conexión a la base de datos establecida...') 
    }
    
    app.listen(config.port, () => {
        console.log(`API REST running on http://localhost:${config.port}`)
    })
})



