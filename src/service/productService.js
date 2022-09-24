const db = require('../database/models')
const categoryService = require('./categoryService')

const productService = {

    async getAll() {
        const products = await db.Product.findAll()
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
    }
}

module.exports = productService;