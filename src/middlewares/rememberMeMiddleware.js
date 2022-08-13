const userModel = require('../models/user');

function rememberMeMiddleware(req, res, next) {
    
    if (req.cookies.email !== undefined &&
        req.session.email === undefined) {
        const user = userModel.findByEmail(req.cookies.email)
        // Se carga en la session asi es tomado por userLoggedMiddleware
        req.session.email = user.email
        req.session.userLogged = user 
 
    }
    
    next()
}

module.exports = rememberMeMiddleware

