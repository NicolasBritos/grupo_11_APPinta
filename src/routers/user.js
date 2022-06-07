const express = require('express')
const routers = express.Router()
const userController = require('../controller/user')

routers.get('/login', userController.login)

routers.get('/register', userController.register)

module.exports = routers