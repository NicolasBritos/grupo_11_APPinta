const getViewPath = view => `forgotPassword/${view}`

const forgotController = {
    getPasswordEmail: (req, res) => {
        res.render(getViewPath('passwordEmail'))
    },
    postPasswordEmail: (req, res) => {
        res.redirect('/user/forgot-password/message')
    },
    getPasswordMessage: (req, res) => {
        res.render(getViewPath('passwordMessage'))
    }
}

module.exports = forgotController