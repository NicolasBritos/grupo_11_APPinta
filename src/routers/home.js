const express = require('express')
const routers = express.Router()
const homeController = require('../controller/home')

routers.get('/', homeController.home)

routers.get('/home', homeController.homeLogged)

module.exports = routers