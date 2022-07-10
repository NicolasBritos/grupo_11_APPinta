const express = require('express')
const routers = express.Router()
const productController = require('../controller/product')
const authMiddleware = require('../middlewares/authMiddleware')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      let filePath = path.join(__dirname, '../../public/img/products')
      cb(null, filePath)
    },
    filename: function(req, file, cb) {
        let fileName = Date.now() + path.extname(file.originalname)
      cb(null, fileName)
    }
})
const upload = multer({ storage })

routers.get('/', productController.getAll)

routers.get('/create', authMiddleware, productController.create)

routers.post('/create', authMiddleware, upload.single('image'), productController.postCreate)

routers.get('/:id', productController.getById)

routers.get('/:id/update', authMiddleware, productController.getUpdate)

routers.put('/:id/update', authMiddleware, upload.single('image'), productController.postUpdate)

routers.delete('/:id/delete', authMiddleware, productController.remove)

module.exports = routers