const express = require('express')
const routers = express.Router()
const productController = require('../controller/product')
const authMiddleware = require('../middlewares/authMiddleware')
const uploadImgMiddleware = require('../middlewares/uploadImgMiddleware')


routers.get('/', productController.getAll)

routers.get('/create', authMiddleware, productController.create)

routers.post('/create', authMiddleware, uploadImgMiddleware.single('image'), productController.postCreate)

routers.get('/:id', productController.getById)

routers.get('/:id/update', authMiddleware, productController.getUpdate)

routers.put('/:id/update', authMiddleware, uploadImgMiddleware.single('image'), productController.postUpdate)

routers.delete('/:id/delete', authMiddleware, productController.remove)

module.exports = routers