const userLoggedMiddleware = (req, res, next) => {
    res.locals.isLogged = false
    res.locals.userLogged = null
    
    if (req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    }

    next()
}

module.exports = userLoggedMiddleware