const express = require('express')
const routers = express.Router()
const productAPIController = require('../../controller/api/productAPI')

routers.get('/', productAPIController.getAll)

routers.get('/:id', productAPIController.getById)

routers.delete('/:id', productAPIController.delete)

module.exports = routers