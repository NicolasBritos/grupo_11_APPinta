const express = require('express')
const routers = express.Router()
const productController = require('../controller/product')

routers.get('/:id?', productController.products)

routers.get('/cart', productController.cart)

module.exports = routers