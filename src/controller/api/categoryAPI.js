const db = require('../../database/models')
const categoryService = require('../../service/categoryService')

const categoryAPIController = {

    async getAll(req, res) {
        const products = await categoryService.getAll();
        res.send(products);
    },

    getById: async(req, res) => {
        let categoryDetail = await categoryService.getById(req.params.id);
        res.send(categoryDetail);
    }
}

module.exports = categoryAPIController;