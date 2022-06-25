const productModel = require('../models/product')

const homeController = {
    homeLogged: (req, res) => {
        const categories = productModel.getCategories()
        console.log(categories)
        const context = {categories}
        res.render('homeLogged', context)
    },
    home: (req, res) => {
        const categories = productModel.getCategories()
        console.log(categories)
        const context = {categories}
        res.render('home', context)
    }
}

module.exports = homeController