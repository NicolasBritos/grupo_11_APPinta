const express = require('express')
const routers = express.Router()
const categoryAPIController = require('../../controller/api/categoryAPI')

routers.get('/', categoryAPIController.getAll)

routers.get('/:id', categoryAPIController.getById)

module.exports = routers