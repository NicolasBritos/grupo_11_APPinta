const express = require('express')
const routers = express.Router()
const productController = require('../controller/product')

routers.get('/', productController.getAll)
/*
    si se coloca /create en el nav toma el controlle de /:id
    Como se puede especificar que :id es una numero??
*/


routers.get('/:id/update', productController.update)

routers.get('/create', productController.create)

routers.get('/:id', productController.getById)

module.exports = routers