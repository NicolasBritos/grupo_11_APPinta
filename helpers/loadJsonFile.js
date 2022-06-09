const fs = require('fs')
const path = require('path')

const getFilePath = (fileName) => {
    return path.join(__dirname, '../src/models', fileName)
}

const loadJsonFile = (fileName) => {
    /* Load the file and convert its to a js object */
    const opt = {encoding:'utf8', flag:'r'}
    const jsonData = fs.readFileSync(getFilePath(fileName), opt) 
    return JSON.parse(jsonData)
}

module.exports = loadJsonFile