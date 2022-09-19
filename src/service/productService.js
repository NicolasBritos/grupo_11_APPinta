const db = require('../database/models')

const productService = {

    async getAll() {
        const products = await db.Product.findAll()
        return products;
    }   
}

module.exports = productService;