const loadJsonFile = require('../../helpers/loadJsonFile')

const homeController = {
    homeLogged: (req, res) => {
        const categories = loadJsonFile('categories.json')
        const context = {categories}
        res.render('homeLogged', context)
    },
    home: (req, res) => {
        const categories = loadJsonFile('categories.json')
        const context = {categories}
        res.render('home', context)
    }
}

module.exports = homeController