const productModel = require('../models/product')
const getViewPath = view => `products/${view}`
const categoryModel = require('../models/category');
const db = require('../database/models');

/** Setea los mensaje de exito o error que vienen desde los parametros 
 * GET para mostrar en las vistas
 * @param {*} locals 
 * @param {*} query 
 */
const getMsg = (query) => {
    const errMsg = query.errorMsg;
    const succesMsg = query.successMsg;
    let msg = null 

    if (errMsg) {
        msg = {
            message: decodeURIComponent(errMsg),
            type: 'error'
        }
    } 

    if (succesMsg) {
        msg = {
            message: decodeURIComponent(succesMsg),
            type: 'success'
        }
    }

    return {msg}
}

const getProductsAndCategory = async (query) => {
    const categoryTitle = query.category
    let productList = null
    let categoryObj

    if (categoryTitle) {
        await db.Category.findOne({
            where: {
                title: categoryTitle
            }
        })
            .then(category => categoryObj = category)

        await db.Product.findAll({
            where: {
                categoryId: categoryObj.id
            }
        })
            .then(products => {
                productList = products
            })
    } else {
        await db.Product.findAll()
            .then(products => {
                productList = products
            })
    }

    return  {
        category: categoryTitle,
        products: productList
    }
}

const productController = {

    getAll: async (req, res) => {
        let locals;

        await getProductsAndCategory(req.query)
            .then(productsAndCategory => {
                locals = {...getMsg(req.query), ...productsAndCategory}
            })
        res.render(getViewPath('productView'), locals)
    },

    getById: async (req, res) => {
        let locals = {};

        await db.Product.findByPk(req.params.id)
            .then(product => {
                console.log(locals)
                locals.product = product
            })
        
        res.render(getViewPath('product'), locals)
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