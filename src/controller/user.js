const getViewPath = view => `user/${view}`

const userController = {
    getRegister: (req, res) => {
        res.render(getViewPath('register'))
    },
    postRegister: (req, res) => {
        res.redirect('/home')
    },
    getLogin: (req, res) => {
        res.render(getViewPath('login'))
    },
    postLogin: (req, res) => {
        res.redirect('/home')
    }
}

module.exports = userController