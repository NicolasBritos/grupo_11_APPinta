const userModel = require('../models/user')
const getViewPath = view => `user/${view}`

const userController = {

    getRegister: (req, res) => {
        res.render(getViewPath('register'))
    },

    postRegister: (req, res) => {
        const response = userModel.register(req.body , req.file)
        if (!response.error) {
            res.redirect('/user/login')
        } else {
            const locals = {
                error: response.error,
                body: req.body
            }
            res.render(getViewPath('register'), locals) 
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
    }
}

module.exports = userController