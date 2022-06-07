const homeController = {
    homeLogin: (req, res) => {
        res.render('homeLogin')
    },
    home: (req, res) => {
        res.render('home')
    }
}

module.exports = homeController