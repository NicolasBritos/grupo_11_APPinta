const { validationResult } = require('express-validator');
const userModel = require('../models/user')
const getViewPath = view => `user/${view}`

const userController = {

    getRegister: (req, res) => {
        res.render(getViewPath('register'))
    },

    postRegister: (req, res) => {
        const response = userModel.register(req.body , req.file)
        const resultValidation = validationResult(req);
       // return res.send(resultValidation.mapped())
        if (resultValidation.errors.length >0) {
            
            return res.render((getViewPath('register')),{
                errors : resultValidation.mapped(),
                oldData : req.body
            });
        }else{
             res.redirect('/user/login')
        }
      
    },

    getLogin: (req, res) => {
        res.render(getViewPath('login'))
    },

    postLogin: (req, res) => {
        const body = req.body
        const response = userModel.login(body.email, body.password)
        if (!response.error) {
            res.redirect('/home')
        } else {
            const locals = {
                error: response.error,
                body
            }
            res.render(getViewPath('login'), locals)
        }
    }
}

module.exports = userController