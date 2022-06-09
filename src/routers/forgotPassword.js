const express = require('express')
const routers = express.Router()
const forgotController = require('../controller/forgotPassword')

routers.get('/', forgotController.getPasswordEmail)
routers.post('/', forgotController.postPasswordEmail)
routers.get('/message', forgotController.getPasswordMessage)

module.exports = routers