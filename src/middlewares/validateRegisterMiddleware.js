const { body } = require('express-validator');
const path = require('path');

//Validacion
module.exports = [
  body('name').notEmpty().withMessage('Completar el campo de nombre'),
  body('surname').notEmpty().withMessage('Completar el campo de apellido'),
  body('email').notEmpty().withMessage('Completar el campo de email').bail().isEmail().withMessage('Escribir un formato de email valido'),
  body('password').notEmpty().withMessage('Completar el campo de password'),
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