const { validationResult } = require('express-validator')
const getViewPath = view => `products/${view}`
const db = require('../database/models')
const removeAvatar = require('../helpers/removeAvatar')
const NOT_IMG = 'img-not-found.jpg'
const productService = require('../service/productService')

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
        return res.render(getViewPath('productView'), locals)
    },

    getById: async (req, res) => {
        let locals = {
            product: await productService.getById(req.params.id)
        };
        res.render(getViewPath('product'), locals)
    },

    create: async (req, res) => {
        const locals = {}

        await db.Category.findAll()
            .then(categories => {
                locals.categories = categories
            })
        res.render(getViewPath('create'), locals)
       
	},

    postCreate: async (req, res) => {
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length === 0) {
            const product = await db.Product.create({
                name: req.body.name,
                description: req.body.description,
                price: parseFloat(req.body.price),
                stock: parseInt(req.body.stock),
                discount: parseInt(req.body.discount),
                img: req.file? req.file.filename: NOT_IMG,
                categoryId: parseInt(req.body.category)
            })

            await productService.postActionsCreate(product.id)

            return res.redirect('/products')
        }

        return res.render((getViewPath('create')), {
            errors : resultValidation.mapped(),
            product,
            errorForm: null
        });
	},
  
    getUpdate: async (req, res) => {
        const findProduct = db.Product.findByPk(req.params.id)
        const getCategories = db.Category.findAll()
        const locals = {}

        await Promise.all([findProduct, getCategories])
            .then(values => {
                locals.product = values[0]
                locals.categories = values[1]

                return res.render(getViewPath('update'), locals)
            })
            .catch(err => {
                const encodedMsg = encodeURIComponent(err)
                return res.redirect(`/products?errorMsg=${encodedMsg}`)
            })
    },

    putUpdate: async (req, res) => {
        let oldImg= req.body.file;
        await db.Product.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            discount: req.body.discount,
            img: req.file? req.file.filename: oldImg,
            categoryId: req.body.categoryId
        }, {
            where: {
                id: req.params.id
            }
        })

        const successMessage = 'El producto ha sido actualizado.'
        const encodedMsg = encodeURIComponent(successMessage)
        res.redirect(`/products?successMsg=${encodedMsg}`)
    },

    remove: async (req, res) => {
        await productService.delete(req.params.id)

        const successMessage = 'El producto ha sido eliminado.'
        const encodedMsg = encodeURIComponent(successMessage)
        res.redirect(`/products?successMsg=${encodedMsg}`)
       
    }
}

module.exports = productController