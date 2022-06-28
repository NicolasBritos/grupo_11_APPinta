const productModel = require('../models/product')
const getViewPath = view => `products/${view}`
const categoryModel = require('../models/category')


const setError = (locals, query) => {
    const errMsg = query.errorMsg;
    const decodedErrorMsg = decodeURIComponent(errMsg)
    locals.error = errMsg? {message: decodedErrorMsg}: null
}

const setProducts = (locals, query) => {
    const category = query.category
    let products; 

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
        setError(locals, req.query)
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
    //    console.log(categories)
        res.render(getViewPath('create'), locals)
       
	},
    postCreate: (req, res) => {
        const body = req.body
        const file = req.file
		const response = productModel.create(body,file)
        if (!response.error) {
            res.redirect('/products')
        } else { 
            const categories =categoryModel.getAll()
            console.log(categories)
            const locals = {
                error: response.error,
                body: req.body
            }
            res.render(getViewPath('create'), locals) 
        }
		
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