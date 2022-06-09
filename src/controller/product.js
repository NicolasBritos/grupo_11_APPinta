const getViewPath = view => `products/${view}`
const loadJsonFile = require('../../helpers/loadJsonFile')

const productController = {
    getAll: (req, res) => {
        res.render(getViewPath('productView'))
    },
    getById: (req, res) => {
        let id = req.params.id
        res.render(getViewPath('product'))
    },
    create: (req, res) => {
        const categories = loadJsonFile('categories.json')
        const context = {categories}
        res.render(getViewPath('create'), context)
    },
    update: (req, res) => {
        const categories = loadJsonFile('categories.json')
        const context = {categories}
        res.render(getViewPath('update'), context)
    }
}

module.exports = productController