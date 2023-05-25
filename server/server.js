const express = require ('express')
require('dotenv').config()
const {dbConnection} = require('../Database/config')
const cors= require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port= process.env.PORT

        this.paths= {
            auth: '/api/auth',
            task: '/api/task'
        }

        this.connectToDB()
        this.addMiddlewares()
        this.setRoutes()
    }

    async connectToDB(){
        await dbConnection()
    }

    addMiddlewares(){
        this.app.use(cors())

        this.app.use(express.json())

        this.app.use(express.static('public'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('sevidor corriendo en puerto', process.env.PORT)
        })
    }
}

nodule.exports = Server