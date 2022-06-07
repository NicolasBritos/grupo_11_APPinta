const { templatePath } = require('../../helpers/templatePath')

const productController = {
    products: (req, res) => {
        let id = req.params.id
        if (id === undefined) {
            res.sendFile(templatePath('productView'))
        } else {
            res.sendFile(templatePath('product'))
        }
        
    },
    cart: (req, res) => {
        res.sendFile(templatePath('productCart'))
    } 
}

module.exports = productController