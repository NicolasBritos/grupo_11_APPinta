const express = require('express')
const routersHome = express.Router()
const homeController = require('../controller/home')

routersHome.get('/', homeController.home)

routersHome.get('/home', homeController.homeLogin)

module.exports = routersHome