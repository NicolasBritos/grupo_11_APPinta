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
           if (resultValidation.errors.length >0) {
                   
            return res.render((getViewPath('register')),{
                errors : resultValidation.mapped(),
                oldData : req.body
            });

        }/*        
        let userJS = userModel.findByEmail('email');

		if (userJS) {
			return res.render((getViewPath('register')), {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}*/else{
            res.redirect('/user/login');
        }  
    },

    getLogin: (req, res) => {
        const nextUrl = req.query.next
        
        const context = {
            nextUrl: nextUrl? nextUrl: null
        }
        res.render(getViewPath('login'), context)
    },

    postLogin: (req, res) => {
        const body = req.body
        const response = userModel.login(body.email, body.password)
        if (!response.error) {
            const nextUrl = req.query.next
            // redireccion next page
            req.session.userLogged = response.user
            if (nextUrl) return res.redirect(nextUrl)
            return res.redirect('/')
        } else {
            const locals = {
                error: response.error,
                body
            }
            res.render(getViewPath('login'), locals)
        }
    },
   
    
}

module.exports = userController