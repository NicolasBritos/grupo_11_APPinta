const { response } = require('express');
const db = require('../../database/models');
const { getAllByPagination } = require('../../service/productService');
const productService = require('../../service/productService')

const productAPIController = {

    async getAll(req, res) {
        const start = parseInt(req.query.start)
        const size = parseInt(req.query.size)
        let products = null
        
        if ((start && size) && (start != 0 && size != 0)) {
            products = await productService.getAllByPagination(start, size)
        } else {
            products = await productService.getAll()
        }
        
        res.send(products)
    },

    async getById(req, res) {
        let productDetail = await productService.getById(req.params.id)
        res.send(productDetail)
    },

    async delete(req, res) {
        const id = req.params.id
        console.log(id)
        const response = {
            status: 'OK',
            object: { id }
        }
        res.send(response)
    }
}

module.exports = productAPIController