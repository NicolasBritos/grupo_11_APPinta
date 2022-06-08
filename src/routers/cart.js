const express = require('express')
const routers = express.Router()
const cartController = require('../controller/cart')

routers.get('/', cartController.getCart)

module.exports = routers