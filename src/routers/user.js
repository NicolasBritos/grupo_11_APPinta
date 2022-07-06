const express = require('express')
const routers = express.Router()
const userController = require('../controller/user')
const path = require('path')
const multer = require('multer')
const { body } = require('express-validator')

//Validacion
const validateRegisterForm = [
  body('name').notEmpty().withMessage('Debes completar el campo de nombre'),
  body('surname').notEmpty().withMessage('Debes completar el campo de apellido'),
  body('email').notEmpty().withMessage('Debes completar el campo de email').bail().isEmail().withMessage('Escribir un formato de email valido'),
  body('password').notEmpty().withMessage('Debes completar el campo de password'),
  body('avatar').custom((value, {req}) =>{
    let file = req.file;
    let accept = ['.jpg','.png','.gif'];
   
    if (!file){
      throw new Error ('Ingresa una imagen');
    }else{
      let fileExtension = path.extname(file.originalname);
      if(!accept.includes(fileExtension)){
        throw new Error (`Las extenciones permitidas son ${accept.join(', ')}`);
      }
    }
  
    return true;
  })

  ];

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      let filePath = path.join(__dirname, '../../public/img/users')
      cb(null, filePath)
    },
    filename: function(req, file, cb) {
      let fileName = Date.now() + path.extname(file.originalname)
      cb(null, fileName)
    }
})

const upload = multer({ storage })

/* LOGIN */
routers.get('/login', userController.getLogin)
routers.post('/login', userController.postLogin)

/* REGISTER */
routers.get('/register', userController.getRegister)
routers.post('/register', upload.single('avatar'),validateRegisterForm, userController.postRegister)

/* FORGOT PASSWORD */
routers.use('/forgot-password', require('./forgotPassword'))

module.exports = routers