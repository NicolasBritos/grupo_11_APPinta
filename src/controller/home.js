const categoryModel = require('../models/category')

const homeController = {

    homeLogged: (req, res) => {
        const categories = categoryModel.getAll()
        const locals = {categories}
        res.render('homeLogged', locals)
    },
    
    home: (req, res) => {
        const categories = categoryModel.getAll()
        const locals = {categories}
        res.render('home', locals)
    }
}

module.exports = homeController