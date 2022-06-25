const productModel = require('../models/product')
const getViewPath = view => `products/${view}`


const productController = {

    getAll: (req, res) => {
        const errMsg = req.query.errorMsg;
        const decodedErrorMsg = decodeURIComponent(errMsg)
        const locals = {
            error: errMsg? {message: decodedErrorMsg}: null
        }
        res.render(getViewPath('productView'), locals)
    },

    getById: (req, res) => {
        const response = productModel.findById(req.params.id)
        if (!response.error) {
            const locals = {
                product: response.product
            }
            res.render(getViewPath('product'), locals)
        } else {
            const encodedMsg = encodeURIComponent(response.error.message)
            res.redirect(`/products?errorMsg=${encodedMsg}`)
        }
    },

    create: (req, res) => {
        const context = {
            categories: productModel.getCategories()
        }
        res.render(getViewPath('create'), context)
    },

    getUpdate: (req, res) => {
        const response = productModel.findById(req.params.id)
        if (!response.error) {

            console.log(productModel.getCategories())
            
            const locals = {
                categories: productModel.getCategories(), 
                product: response.product
            }
            res.render(getViewPath('update'), locals)
        } else {
            const encodedMsg = encodeURIComponent(response.error.message)
            res.redirect(`/products?errorMsg=${encodedMsg}`)
        }
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