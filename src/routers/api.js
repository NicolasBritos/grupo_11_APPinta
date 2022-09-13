const express = require('express')
const routers = express.Router()

routers.use('/user', require('./userAPI'))

routers.use('/product', require('./productAPI'))

module.exports = routers