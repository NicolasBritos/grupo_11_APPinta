const productModel = require('../models/product')
const getViewPath = view => `products/${view}`

const productController = {
    getAll: (req, res) => {
        res.render(getViewPath('productView'))
    },
    getById: (req, res) => {
        let id = parseInt(req.params.id)
        res.render(getViewPath('product'))
    },
    create: (req, res) => {
        const context = {
            categories: productModel.getCategories()
        }
        res.render(getViewPath('create'), context)
    },
    getUpdate: (req, res) => {
        const product = productModel.findById(req.params.id)
        const context = {
            categories: productModel.getCategories(), 
            product: product
        }

        const result = productModel.update()

        if (product.error) {
            const context = {
                categories: productModel.getCategories(), 
                result: result
            }  
        }
        res.render(getViewPath('update'), context)
    },
    postUpdate: (req, res) => {
        const id  = parseInt(req.params.id)

        const context = {
            categories: productModel.getCategories(), 
            product: null
        }
        res.render(getViewPath('update'), context)
    }
}

module.exports = productController