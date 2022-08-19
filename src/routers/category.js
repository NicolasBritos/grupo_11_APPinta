const express = require('express')
const routers = express.Router()
const categoryController = require('../controller/category')

routers.get('/', categoryController.getCategory)
routers.post('/', caegoryController.postCategory)

module.exports = routers