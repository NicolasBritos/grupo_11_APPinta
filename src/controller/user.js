const { validationResult } = require('express-validator')
const userModel = require('../models/user')
const getViewPath = view => `user/${view}`
const removeAvatar = require('../helpers/removeAvatar')
const db = require('../database/models')

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
        const resultValidation = validationResult(req)
        const user = req.session.userLogged

        if (resultValidation.errors.length === 0) {
            const response = userModel.update(user.id, req.body, req.file)
            req.session.userLogged = response.user
            return res.redirect('/user/edit')
        }

        return res.render((getViewPath('edit')), {
            errors : resultValidation.mapped(),
            user,
            errorForm: null
        });
    },

    delete: (req, res) => {
        const user = req.session.userLogged
        const response =db.Usuario.destroy({
            where: {id: user.id}
        });
        return res.redirect('/user/logout');
    },

    adminDelete: (req, res) => {
        const response =db.Usuario.destroy({
            where: {id: req}
        });
        return res.redirect('/user/list');
    },

    findAll: (req,res) => {
        db.User.findAll()
        .then((usuarios) => {
            const locals = {usuarios}
            return res.render(getViewPath('list'), locals)
        });

    }

}




module.exports = userController