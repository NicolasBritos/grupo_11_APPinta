const express = require('express')
const routers = express.Router()
const userAPIController = require('../controller/userAPI')

routers.get('/', userAPIController.getAll)

routers.get('/:id', userAPIController.getById)

module.exports = routers