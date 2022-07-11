const authMiddleware = (req, res, next) => {
   
    if (!req.session.userLogged) {
        let url = '/user/login'

        if (req.method === 'GET') url = `${url}?next=${req.originalUrl}`
        
        return res.redirect(url)
    }
    next()
}

module.exports = authMiddleware