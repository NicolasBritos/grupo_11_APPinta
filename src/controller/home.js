const categoryModel = require('../models/category')

const homeController = {
    
    home: (req, res) => {
        const categories = categoryModel.getAll()
        const locals = {}
        if (req.session.userLogged) {
            locals.userLogged = req.session.userLogged
            locals.isLogged = true
        } else {
            locals.userLogged = null
            locals.isLogged = false
        }

        locals.categories = categories
        res.render('home', locals)
    }
}

module.exports = homeController