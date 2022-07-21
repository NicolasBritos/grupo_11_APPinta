const path = require('path')
const fs = require('fs')

const removeAvatar = filename => {
    let filePath = path.join(__dirname, "../public/img/users/", filename)
    fs.unlinkSync(filePath)
}

module.exports = removeAvatar