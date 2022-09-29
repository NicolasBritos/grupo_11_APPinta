const db = require('../../database/models')
const categoryService = require('../../service/categoryService.js')
const userService = require('../../service/userService.js')
const productService = require('../../service/productService.js')

const homeAPIController = {
    
    async getHomeData(req, res) {

        const countUsers = await userService.getCount();
        const lastUser = await userService.getLastCreated();

        const countProducts = await productService.getCount();
        const lastProduct = await productService.getLastCreated();

        const countCategories = await categoryService.getCount();
        const lastCategory = await categoryService.getLastCreated();
        
        const response = {
            'users':{ ...countUsers, ...lastUser },
            'products':{ ...countProducts, ...lastProduct },
            'categories':{ ...countCategories, ...lastCategory }
        }

        console.log(response);

        res.send(response);
    }
}

module.exports = homeAPIController;