const { validationResult } = require('express-validator');
const userModel = require('../models/user')
const getViewPath = view => `user/${view}`
const removeAvatar = require('../helpers/removeAvatar')

const userController = {

    getRegister: (req, res) => {
        res.render(getViewPath('register'))
    },

    postRegister: (req, res) => {
        const resultValidation = validationResult(req)
    
        if (resultValidation.errors.length === 0) {
            const response = userModel.register(req.body, req.file)

            if (response.error) {
        
                if(req.file) removeAvatar(req.file.filename)
                
                return res.render((getViewPath('register')), {
                    errors : resultValidation.mapped(),
                    oldData : req.body,
                    errorForm: response.error.message
                });
            }

            return res.redirect('/user/login');
        }

        if(req.file) removeAvatar(req.file.filename)

        return res.render((getViewPath('register')), {
            errors : resultValidation.mapped(),
            oldData : req.body,
            errorForm: null
        });
    },

    getLogin: (req, res) => {
        const nextUrl = req.query.next

        const context = {
            nextUrl: nextUrl ? nextUrl : null
        }
        res.render(getViewPath('login'), context)
    },

    postLogin: (req, res) => {
        const body = req.body
        const response = userModel.login(body.email, body.password)
        const resultValidation = validationResult(req)
        
        if (resultValidation.errors.length > 0 || response.error) {
            return res.render((getViewPath('login')), {
                errors: resultValidation.mapped(),
                oldData: req.body,
                errorForm: response.error ? response.error.message : null
            });
        } else {
            const nextUrl = req.query.next
            // redireccion next page
            req.session.userLogged = response.user

            console.log(body)
            
            if (body.remember === 'on') {
                res.cookie('email', response.user.email, {maxAge: 60 * 60 * 1000})
            }
            
            if (nextUrl) return res.redirect(nextUrl)

            return res.redirect('/')
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.clearCookie('email')
        res.redirect('/')
    },

    getEdit: (req, res) => {
        const user = req.session.userLogged
        res.render(getViewPath('edit'), {user})
    },

    postEdit: (req, res) => {

    }
}

module.exports = userController