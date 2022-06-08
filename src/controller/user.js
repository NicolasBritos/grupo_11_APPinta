const userController = {
    getRegister: (req, res) => {
        res.render('register')
    },
    postRegister: (req, res) => {
        res.redirect('/home')
    },
    getLogin: (req, res) => {
        res.render('login')
    },
    postLogin: (req, res) => {
        res.redirect('/home')
    }
}

module.exports = userController