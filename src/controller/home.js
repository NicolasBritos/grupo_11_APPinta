const { templatePath } = require('../../helpers/templatePath')

const homeController = {
    homeLogin: (req, res) => {
        res.sendFile(templatePath('homeLogin'))
    },
    home: (req, res) => {
        res.sendFile(templatePath('home'))
    }
}

module.exports = homeController