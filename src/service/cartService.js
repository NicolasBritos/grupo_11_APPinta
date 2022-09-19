const db = require('../database/models')

const cartService = {

    async createCart(userId) {
        const cart = { 
            userId,
            discount: 0,
            total: 0 
        }
        await db.Cart.create(cart)
    },

    async getUserCart(userId) {
        const cart = await db.Cart.findOne({
            where: { userId }
        })
        return cart;
    }
}

module.exports = cartService;