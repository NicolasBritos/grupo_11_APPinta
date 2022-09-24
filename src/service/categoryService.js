const db = require('../database/models')

const categoryService = {

    async getAll() {
        const products = await db.Category.findAll()
        return products;
    },
    getById: async (id) => {
        let categoryDetail = await db.Category.findByPk(id)
        
        return categoryDetail;
    }
}

module.exports = categoryService;