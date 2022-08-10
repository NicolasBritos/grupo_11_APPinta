const userModel = require('../models/user');
<<<<<<< HEAD
=======

>>>>>>> 0afd09588bb02fb74db2a2095be552a6b414ceed
function rememberMeMiddleware(req, res, next) {
    if (req.cookies.email != undefined &&
        req.session.email === undefined) {
        const user = userModel.findByEmail(req.cookies.email)
        req.session.email = user.email
    }
     next()
}
<<<<<<< HEAD
module.exports = rememberMeMiddleware

=======
module.exports = rememberMeMiddleware
>>>>>>> 0afd09588bb02fb74db2a2095be552a6b414ceed
