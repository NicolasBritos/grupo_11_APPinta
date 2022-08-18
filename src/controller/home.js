const db = require('../database/models')
const categoryModel = require('../models/category')

const homeController = {
    
    home: async (req, res) => {
        const locals = {}

        await db.Category.findAll()
            .then(categories => {
                locals.categories = categories
            })

        if (req.session.userLogged) {
            locals.userLogged = req.session.userLogged
            locals.isLogged = true
        } else {
            locals.userLogged = null
            locals.isLogged = false
        }

        res.render('home', locals)
    }
}

module.exports = homeController