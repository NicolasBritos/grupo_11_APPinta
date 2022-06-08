const express = require('express')
const routers = express.Router()
const userController = require('../controller/user')

routers.get('/login', userController.getLogin)
routers.post('/login', userController.postLogin)

routers.get('/register', userController.register)

module.exports = routers