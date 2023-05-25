const express = require('express')
require('dotenv').config()
const {dbConnection} = require('./Database/config')

//crear express app
const app = express()

//crear base de datos
dbConnection()

app.listen(express.static('public'))

//rutas 
app.use('/api/auth', require ('./reoutes/auth'))

// Escuchar en puerto 4000
app.listen(4000,()=>{
    console.log('servidor coriendo en puerto 4000', process.env.PORT)
})