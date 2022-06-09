const getViewPath = view => `products/${view}`

const productController = {
    products: (req, res) => {
        let id = req.params.id
        if (id === undefined) {
            res.render(getViewPath('productView'))
        } else {
            res.render(getViewPath('product'))
        }
    },
    cart: (req, res) => {
        console.log('Dentro de products cart')
        res.render(getViewPath('productCart'))
    }
}

module.exports = productController