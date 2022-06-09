const getViewPath = view => `products/${view}`

const productController = {
    getAll: (req, res) => {
        res.render(getViewPath('productView'))
    },
    getById: (req, res) => {
        let id = req.params.id
        res.render(getViewPath('product'))
    },
    create: (req, res) => {
        res.render(getViewPath('create'))
    }
}

module.exports = productController