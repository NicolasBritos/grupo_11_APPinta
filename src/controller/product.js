const productModel = require('../models/product')
const getViewPath = view => `products/${view}`

/** Setea los mensaje de exito o error que vienen desde los parametros 
 * GET para mostrar en las vistas
 * @param {*} locals 
 * @param {*} query 
 */
const setMsg = (locals, query) => {
    const errMsg = query.errorMsg;
    const succesMsg = query.successMsg;
    locals.msg = null 

    if (errMsg) {
        locals.msg = {
            message: decodeURIComponent(errMsg),
            type: 'error'
        }
    } 

    if (succesMsg) {
        locals.msg = {
            message: decodeURIComponent(succesMsg),
            type: 'success'
        }
    } 
}

const setProducts = (locals, query) => {
    const category = query.category

    if (category) {
        locals.products = productModel.findByCategory(category)
        locals.category = category
    } else {
        locals.products = productModel.getAll()
        locals.category = null
    }
}

const productController = {

    getAll: (req, res) => {
        const locals = {}
        setMsg(locals, req.query)
        setProducts(locals, req.query)
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
    },

    remove: (req, res) => {
        const response = productModel.remove(req.params.id)
        if (!response.error) {
            const successMessage = 'El producto ha sido eliminado'
            const encodedMsg = encodeURIComponent(successMessage)
            res.redirect(`/products?successMsg=${encodedMsg}`)
        } else {
            console.log('Todo salio bien')
            res.redirect('/products')
        }
    }
}

module.exports = productController