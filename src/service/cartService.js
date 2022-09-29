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
            where: { userId },
            include: {
                model: db.Product,
                as: 'products'
            }

        })
        return cart;
    },

    async deleteCart(id) {
        await db.Cart.destroy({
            where: { id }
        });
    }

}

module.exports = cartService;