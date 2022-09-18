const db = require('../../database/models')

const productAPIController = {

    getAll: async(req, res) => {
        let productList;

        await db.Product.findAll()
            .then(products => {
                productList = products
            })
        res.send(productList);
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