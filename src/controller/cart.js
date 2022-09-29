const cartService = require('../service/cartService')
const productService = require('../service/productService')

const cartController = {
    
    async getCart(req, res) {
        const userId = req.session.userLogged.id
        const cart = await cartService.getUserCart(userId)

        res.render('products/productCart', { cart })
    },

    addProduct(req, res) {

    },

    removeProduct(req, res) {

    }
}

module.exports = cartController