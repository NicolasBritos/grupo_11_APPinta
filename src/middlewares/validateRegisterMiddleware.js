const { body } = require('express-validator');
const validateImageExtension = require('../helpers/validateImageExtension');

module.exports = [
  body('name').notEmpty().withMessage('Completar el campo de nombre'),
  body('surname').notEmpty().withMessage('Completar el campo de apellido'),
  body('email').notEmpty().withMessage('Completar el campo de email').bail().isEmail().withMessage('Escribir un formato de email valido'),
  body('password').isLength({ min: 6 }).withMessage('Tu contraseña debe contener al menos 6 caracteres'),
  body('rpassword')
        .notEmpty().withMessage('Por favor repetí la contraseña.').bail()
        .custom((value, { req }) => {
            let Original = req.body.password;
            let nuevaPass = req.body.rpassword;

            if (Original != nuevaPass) {
               throw new Error('Las contraseñas no coinciden.');
            }
            return true;
        }),
  body('avatar').custom(validateImageExtension)
];