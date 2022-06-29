const productModel = require('../models/product')
const getViewPath = view => `products/${view}`
const categoryModel = require('../models/category')

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
        const categories = categoryModel.getAll()
        const locals = {categories}
        res.render(getViewPath('create'), locals)
       
	},
    postCreate: (req, res) => {
        const body = req.body
        const file = req.file
		const response = productModel.create(body,file)
        if (!response.error) {
            res.redirect('/products')
        } else { 
            const categories = categoryModel.getAll()
            const locals = {
                error: response.error,
                body: req.body,
                categories
            }
            res.render(getViewPath('create'), locals) 
        }
	},
  
    getUpdate: (req, res) => {
        const response = productModel.findById(req.params.id)
        if (!response.error) {
            const locals = {
                product: response.product,
                categories: categoryModel.getAll()
            }
            res.render(getViewPath('update'), locals)
        } else {
            const encodedMsg = encodeURIComponent(response.error.message)
            res.redirect(`/products?errorMsg=${encodedMsg}`)
        }
    },

    postUpdate: (req, res) => {
        const id = req.params.id
		const response = productModel.update(id, req.body, req.file)
        if (!response.error) {
            const successMessage = 'El producto ha sido actualizado.'
            const encodedMsg = encodeURIComponent(successMessage)
            res.redirect(`/products?successMsg=${encodedMsg}`)
        } else { 
            const categories =categoryModel.getAll()
            const locals = {
                error: response.error,
                product: req.body,
                categories
            }
            res.render(getViewPath('create'), locals) 
        }
    },

    remove: (req, res) => {
        const response = productModel.remove(req.params.id)
        if (!response.error) {
            const successMessage = 'El producto ha sido eliminado.'
            const encodedMsg = encodeURIComponent(successMessage)
            res.redirect(`/products?successMsg=${encodedMsg}`)
        } else {
            console.log('Todo salio bien')
            res.redirect('/products')
        }
    }
}

module.exports = productController