const getViewPath = view => `products/${view}`
const loadJsonFile = require('../../helpers/loadJsonFile')

const findById = id => {
    const products = loadJsonFile('products.json')
    return products.find( product =>  product.id === id)
}

const productController = {
    getAll: (req, res) => {
        res.render(getViewPath('productView'))
    },
    getById: (req, res) => {
        let id = parseInt(req.params.id)
        res.render(getViewPath('product'))
    },
    create: (req, res) => {
        const categories = loadJsonFile('categories.json')
        const context = {categories}
        res.render(getViewPath('create'), context)
    },
    getUpdate: (req, res) => {
        const id  = parseInt(req.params.id)
        const categories = loadJsonFile('categories.json')
        const product = findById(id) || null

        console.log(product.price)
        console.log(product.title)
        console.log(product.description)

        const context = {categories, product}
        res.render(getViewPath('update'), context)
    },
    postUpdate: (req, res) => {
        const id  = parseInt(req.params.id)
        const categories = loadJsonFile('categories.json')
        const product = findById(id) || null
        
        console.log('body ', req.body)

        // update product
        product.title = req.body.title
        product.price = req.body.price
        product.description = req.body.description

        console.log('Cambios en el producto')
        console.log(product)

        const context = {categories, product}
        res.render(getViewPath('update'), context)
    }
}

module.exports = productController