const JWT = require('jsonwebtoken')

const generateToken = (id) => JWT.sign({id} , process.env.JWT_SECRET , { expiresIn:"40d"})

module.exports = {generateToken}