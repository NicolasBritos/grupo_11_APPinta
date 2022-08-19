const db = require('../database/models')

async function rememberMeMiddleware(req, res, next) {
    
    if (req.cookies.email !== undefined &&
        req.session.email === undefined) {
        await db.User.findOne({
            where: {
                email: req.cookies.email
            }
        })
            .then(user => {
                req.session.email = user.email
                req.session.userLogged = user 
            })
    }
    
    next()
}

module.exports = rememberMeMiddleware

