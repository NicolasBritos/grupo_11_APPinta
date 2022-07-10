const categoryModel = require('../models/category')

const homeController = {
    
    home: (req, res) => {
        const categories = categoryModel.getAll()
        const locals = {categories}
        res.render('home', locals)
    }
}

module.exports = homeController