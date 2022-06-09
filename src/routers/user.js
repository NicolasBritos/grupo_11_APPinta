const express = require('express')
const routers = express.Router()
const userController = require('../controller/user')

/* LOGIN */
routers.get('/login', userController.getLogin)
routers.post('/login', userController.postLogin)

/* REGISTER */
routers.get('/register', userController.getRegister)
routers.post('/register', userController.postRegister)

/* FORGOT PASSWORD */
routers.use('/forgot-password', require('./forgotPassword'))

module.exports = routers