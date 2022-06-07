const path = require('path')

const templatePath = (template) => {
    const dirTemplateName = 'views'
    return path.join(__dirname, `../src/${dirTemplateName}/${template}.html`)
}

module.exports = {templatePath};