const productController = {
    products: (req, res) => {
        let id = req.params.id
        if (id === undefined) {
            res.render('productView')
        } else {
            res.render('product')
        }
    },
    cart: (req, res) => {
        res.render('productCart')
    }
}

module.exports = productController