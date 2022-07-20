const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userApi = require('./routes/userRoutes')
const chatApi = require('./routes/chatRoutes')
const chatApi = require('./routes/chatRoutes')

const app = express()
dotenv.config()

app.use(express.urlencoded())
app.use(express.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use( '/' , userApi , chatApi)


app.use((req , res) => {  // handle the situation that the api is don't exists

    res.status(404).send(`Not Found - ${req.url}`)

})

const PORT = process.env.PORT 

app.listen(PORT , console.log(`Server Started on PORT ${PORT}`))

mongoose.connect(process.env.MongoDB_URL)
    .then((res) => console.log(`MongoDB Connected Sucessfully with : ${res.connection.host}`))
    .catch(() => console.log('MongoDB Failed To Connect'))