const db = require('../../database/models')
const productService = require('../../service/productService')

const productAPIController = {

    async getAll(req, res) {
        const products = await productService.getAll();
        res.send(products);
    },

    getById: async(req, res) => {
        let productDetail;

        await db.Product.findByPk(req.params.id)
            .then(product => {
                productDetail = product
            })
        res.send(productDetail);
    }
}

module.exports = productAPIController