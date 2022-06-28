const express = require('express')
const routers = express.Router()
const productController = require('../controller/product')

routers.get('/', productController.getAll)

routers.get('/create', productController.create)

routers.get('/:id', productController.getById)

routers.get('/:id/update', productController.getUpdate)

routers.put('/:id/update', productController.postUpdate)

routers.delete('/:id/delete', productController.remove)

module.exports = routers