const express = require('express')
const routers = express.Router()
const userController = require('../controller/user')
const uploadAvatarMiddleware = require('../middlewares/uploadAvatarMiddleware')
const path = require('path')
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

/* LOGIN */
routers.get('/login', userController.getLogin)
routers.post('/login', userController.postLogin)

/* REGISTER */
routers.get('/register', userController.getRegister)
routers.post('/register', uploadAvatarMiddleware.single('avatar'),validateRegisterForm, userController.postRegister)

/* FORGOT PASSWORD */
routers.use('/forgot-password', require('./forgotPassword'))

module.exports = routers