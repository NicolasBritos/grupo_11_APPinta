const db = require('../database/models')

const categoryService = {

    async getAll() {
        const products = await db.Category.findAll()
        return products;
    },

    getById: async (id) => {
        let categoryDetail = await db.Category.findByPk(id)
        
        return categoryDetail;
    },

    async increaseNumberProduct(increase, id) {
        await db.Category.increment(
            { numberProducts: increase? 1: -1 },
            { where : { id }}
        )
    }
}

module.exports = categoryService;