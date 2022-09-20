const db = require('../database/models')
const cartService = require('./cartService')
const userService = require('./userService')

const registerService = {

    async postActions(email) {
        const user = await userService.getByEmail(email)

        cartService.createCart(user.id)
    }

}

module.exports = registerService;