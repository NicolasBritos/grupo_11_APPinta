const userModel = require('../models/user');

function rememberMeMiddleware(req, res, next) {
    if (req.cookies.email != undefined &&
        req.session.email === undefined) {
        const user = userModel.findByEmail(req.cookies.email)
        req.session.email = user.email
    }
     next()
}
module.exports = rememberMeMiddleware