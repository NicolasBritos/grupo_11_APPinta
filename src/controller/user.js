const { templatePath } = require('../../helpers/templatePath')

const userController = {
    register: (req, res) => {
        res.sendFile(templatePath('register'))
    },
    login: (req, res) => {
        res.sendFile(templatePath('login'))
    }
}

module.exports = userController