const express = require('express')
const routers = express.Router()

routers.use('/users', require('./userAPI'))

routers.use('/products', require('./productAPI'))

module.exports = routers