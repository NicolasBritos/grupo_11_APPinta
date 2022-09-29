const express = require('express')
const routers = express.Router()
const homeAPIController = require('../../controller/api/homeAPI')

routers.get('', homeAPIController.getHomeData)

module.exports = routers