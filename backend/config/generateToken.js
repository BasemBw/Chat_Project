const JWT = require('jsonwebtoken')

const generateToken = (id) => JWT.sign({id} , process.env.JWT_Secret , { expiresIn:"40d"})

module.exports = {generateToken}