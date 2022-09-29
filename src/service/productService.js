const db = require('../database/models')
const categoryService = require('./categoryService')

const productService = {

    async getAll() {
        const products = await db.Product.findAll({
            include: db.Category
        })
        return products
    },

    async getAllByPagination(start, size) {
        const products = await db.Product.findAll({
            offset: start,
            limit: size,
            include: {
                model: db.Category,
                as: 'category'
            }
        })
        return products
    },

    async getById(id) {
        const product = await db.Product.findByPk(id)
        return product
    },
    
    async delete(id) {
        await this.preActionsDelete(id)
        await db.Product.destroy({
            where: { id }
        })
    },

    async postActionsCreate(id) {
        await this.updateNumberProductsField(true, id)
    },

    async preActionsDelete(id) {        
        await this.updateNumberProductsField(false, id)
    },

    async updateNumberProductsField(increase, productId) {
        const product = await this.getById(productId)
        const category = await product.getCategory()
        await categoryService.increaseNumberProduct(increase, category.id)
    },

    async getCount() {
        const count = await db.Product.count();
        return { count }
    },

    async getLastCreated() {
        const last = await db.Product.findOne({
            order: [ [ 'created_at', 'DESC' ] ]
        });
        return { last }
    }
}

module.exports = productService;