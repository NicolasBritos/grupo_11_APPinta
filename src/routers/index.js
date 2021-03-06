const express = require('express')
const routers = express.Router()

routers.use('/', require('./home'))

routers.use('/products', require('./product'))

routers.use('/cart', require('./cart'))

routers.use('/user', require('./user'))

module.exports = routers

