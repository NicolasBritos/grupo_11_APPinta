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
    },

    async getCount() {
        const count = await db.Category.count();
        return { count }
    },

    async getLastCreated() {
        const last = await db.Category.findOne({
            order: [ [ 'created_at', 'DESC' ] ]
        });
        return { last }
    }
}

module.exports = categoryService;