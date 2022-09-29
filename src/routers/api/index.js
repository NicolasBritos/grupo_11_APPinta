const express = require('express')
const routers = express.Router()


routers.use('/home-dashboard', require('./homeAPI'))

routers.use('/users', require('./userAPI'))

routers.use('/products', require('./productAPI'))

routers.use('/categories', require('./categoryAPI'))


module.exports = routers