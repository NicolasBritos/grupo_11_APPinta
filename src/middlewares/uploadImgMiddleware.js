/* UPLOAD PRODUCT IMAGE MIDDLEWARE */
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

const uploadImgMiddleware = multer({ storage })

module.exports = uploadImgMiddleware
