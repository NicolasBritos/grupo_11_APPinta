const express = require('express')
const routers = express.Router()
const userController = require('../controller/user')
const uploadAvatarMiddleware = require('../middlewares/uploadAvatarMiddleware')
const validationsRegister = require('../middlewares/validateRegisterMiddleware')
const validationsLogin = require('../middlewares/validateLoginMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')

/* LOGIN */
routers.get('/login', guestMiddleware, userController.getLogin)
routers.post('/login', validationsLogin, userController.postLogin)




/* REGISTER */
routers.get('/register', guestMiddleware, userController.getRegister)
routers.post('/register', uploadAvatarMiddleware.single('avatar'),validationsRegister, userController.postRegister)

/* FORGOT PASSWORD */
routers.use('/forgot-password', require('./forgotPassword'))


module.exports = routers