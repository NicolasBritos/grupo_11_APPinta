const db = require('../database/models')
const bcrypt = require('bcryptjs')
const NOT_IMG = 'default-avatar.jpg';

const userService = {

    async createUser(user, file) {
        let newUser = null
        const exists = await this.getByEmail(user.email)
        if (exists === null) {
            user.avatar = file ? file.filename : NOT_IMG
            user.password = bcrypt.hashSync(user.password, 10)
            await db.User.create(user)
            newUser = await this.getByEmail(user.email)
        }

        return newUser
    },

    async getByEmail(email) {
        const user = await db.User.findOne({ where: { email } });
        return user;
    },

    async getCount() {
        const count = await db.User.count();
        return { count }
    },

    async getLastCreated() {
        const last = await db.User.findOne({
            order: [ [ 'created_at', 'DESC' ] ]
        });
        return { last }
    }

}

module.exports = userService;