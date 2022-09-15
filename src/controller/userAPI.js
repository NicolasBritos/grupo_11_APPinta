const db = require('../database/models')


const userAPIController = {
    
    getAll: async(req, res) => {
        let userList;

        await db.User.findAll()
            .then(users => {
                userList = users
            })
        res.send(userList);
    },

    getById: async(req, res) => {
        let userDetail;

        await db.User.findByPk(req.params.id)
            .then(user => {
                userDetail = user
            })
        res.send(userDetail);
    }

}   

module.exports = userAPIController