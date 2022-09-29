const db = require('../database/models')

const getMsg = (query) => {
    const errMsg = query.errorMsg;
    const succesMsg = query.successMsg;
    let msg = null 

    if (errMsg) {
        msg = {
            message: decodeURIComponent(errMsg),
            type: 'error'
        }
    } 

    if (succesMsg) {
        msg = {
            message: decodeURIComponent(succesMsg),
            type: 'success'
        }
    }

    return {msg}
}

const homeController = {
        
    home: async (req, res) => {
        const locals = {}

        await db.Category.findAll()
            .then(categories => {
                locals.categories = categories
            })

        if (req.session.userLogged) {
            locals.userLogged = req.session.userLogged
            locals.isLogged = true
        } else {
            locals.userLogged = null
            locals.isLogged = false
        }
       Object.assign(locals, {...getMsg(req.query)});
       return res.render('home', locals)
    }
}

module.exports = homeController