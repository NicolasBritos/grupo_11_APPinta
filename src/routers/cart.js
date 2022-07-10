const express = require('express')
const routers = express.Router()
const cartController = require('../controller/cart')
const authMiddleware = require('../middlewares/authMiddleware')

routers.get('/', authMiddleware, cartController.getCart)

module.exports = routers