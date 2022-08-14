const { body } = require('express-validator');
const validateImageExtension = require('../helpers/validateImageExtension');

module.exports = [
  body('name').notEmpty().withMessage('Completar el campo de nombre'),
  body('surname').notEmpty().withMessage('Completar el campo de apellido'),
  body('avatar').custom(validateImageExtension)
];