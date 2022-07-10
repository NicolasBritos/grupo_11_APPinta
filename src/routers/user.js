const express = require('express')
const routers = express.Router()
const userController = require('../controller/user')
const uploadAvatarMiddleware = require('../middlewares/uploadAvatarMiddleware')


/* LOGIN */
routers.get('/login', userController.getLogin)
routers.post('/login', userController.postLogin)

/* REGISTER */
routers.get('/register', userController.getRegister)
routers.post('/register', uploadAvatarMiddleware.single('avatar'), userController.postRegister)

/* FORGOT PASSWORD */
routers.use('/forgot-password', require('./forgotPassword'))

module.exports = routers