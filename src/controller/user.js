const { validationResult } = require('express-validator')

const bcrypt = require('bcryptjs')
const getViewPath = view => `user/${view}`
const removeAvatar = require('../helpers/removeAvatar')
const db = require('../database/models')
const NOT_IMG = 'default-avatar.jpg';

const userController = {

    getRegister: (req, res) => {
        res.render(getViewPath('register'))
    },

    postRegister: (req, res) => {
        const resultValidation = validationResult(req)
    
        if (resultValidation.errors.length === 0) {
            const user = {...req.body}
            user.avatar = req.file? req.file.filename: NOT_IMG
            user.password = bcrypt.hashSync(user.password, 10)
            db.User.create(user)

            return res.redirect('/user/login')
        }

        if(req.file) removeAvatar(req.file.filename)

        return res.render((getViewPath('register')), {
            errors : resultValidation.mapped(),
            oldData : req.body,
        });
    },

    getLogin: (req, res) => {
        const nextUrl = req.query.next

        const locals = {
            nextUrl: nextUrl ? nextUrl : null
        }
        res.render(getViewPath('login'), locals)
    },

    postLogin: async (req, res) => {
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length === 0) {
            await db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                const rawPassword = req.body.password

                if (user && bcrypt.compareSync(rawPassword, user.password)) {
                    req.session.userLogged = user

                    if (req.body.remember === 'on') {
                        res.cookie('email', user.email, {maxAge: 60 * 60 * 1000})
                    }
                    if (req.query.next) return res.redirect(req.query.next)

                    return res.redirect('/') 
                } 

                return res.render((getViewPath('login')), {
                    errors: null,
                    oldData: req.body,
                    errorForm: 'Email o contraseña incorrecto. Verificalos y vuelvé a intentar.'
                })
            })
        }

        return res.render((getViewPath('login')), {
            errors: resultValidation.mapped(),
            oldData: req.body,
            errorForm: null
        })
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

    putEdit: async (req, res) => {
        const resultValidation = validationResult(req)
        const user = req.session.userLogged

        if (resultValidation.errors.length === 0) {
            await db.User.update({
                name: req.body.name,
                surname: req.body.surname,
                avatar: req.file? req.file.filename: user.avatar 
            }, {
                where: {
                    id: user.id
                }
            })

            await db.User.findByPk(user.id)
                .then(user => {
                    req.session.userLogged = user
                })
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
        db.User.destroy({
            where: {
                id: user.id
            }
        })
        const response =db.User.destroy({
            where: {id: user.id}
        });
        return res.redirect('/user/logout');
    },

    adminDelete: (req, res) => {
        console.log("IDDDDD: " + req.params.id)
        const response = db.User.destroy({
            where: {id:req.params.id}
        });
        if (!response.error) {
            const successMessage = 'El usuario ha sido eliminado.'
            const encodedMsg = encodeURIComponent(successMessage)
            res.redirect(`/user?successMsg=${encodedMsg}`)
        } else {
            console.log('Todo salio bien')
            res.redirect('/user/list')
        }
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