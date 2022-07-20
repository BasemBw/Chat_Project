const express = require('express')
const userController = require('../controllers/userController')
const  { Securely } = require('../middle_ware_operations/checkUser')

const api = express.Router()

api.post('/login' , (userController.userLogin))

api.post('/user' , (userController.userRegister))

api.get('/users' ,  Securely  , userController.getUsersByName )


module.exports = api