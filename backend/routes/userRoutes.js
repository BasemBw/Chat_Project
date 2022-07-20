const express = require('express')
const userController = require('../controllers/userController')

const api = express.Router()

api.post('/login' , (userController.userLogin))

api.post('/user' , (userController.userRegister))

api.get('/users' , (userController.getAllUsers))


module.exports = api