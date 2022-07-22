const { body } = require('express-validator');

//Validacion Login
module.exports = [
    body('email').notEmpty().withMessage("Debe completar el campo Email").bail().isEmail().isLength({min:4}).withMessage('Ingrese un email válido'),
    body('password').notEmpty().withMessage('Debe completar el campo Password').bail().isLength({min:6}).withMessage('Ingrese una password válida')
]


