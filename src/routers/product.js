const express = require('express')
const routers = express.Router()
const productController = require('../controller/product')
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
/*
    si se coloca /create en el nav toma el controlle de /:id
    Como se puede especificar que :id es una numero??
*/




routers.get('/:id/update', productController.getUpdate)

routers.put('/:id/update', productController.postUpdate)

routers.get('/create', productController.create)

routers.post('/create', upload.single('image'), productController.postCreate)

routers.get('/:id', productController.getById)



module.exports = routers