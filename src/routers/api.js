const express = require('express')
const routers = express.Router()

routers.use('/user', require('./userAPI'))

routers.use('/products', require('./productAPI'))

module.exports = routers