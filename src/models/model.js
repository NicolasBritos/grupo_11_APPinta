const path = require('path')
const fs = require('fs')
const getKeys = require('../../helpers/getKeys')

class Model {

    constructor(file) {
        this.fileName = file;
        this.filePath  = Model._getFilePath(this.fileName)
        this.load()
    }

    static _getFilePath = (fileName) => {
        return path.join(__dirname, '../database', fileName)
    }

    static loadFieldsInObj = (obj, fields, validFields) => {
        /* Carga unicamente los campos validos */

        for (let key of getKeys(fields)) {
            if (validFields.includes(key)) {
                obj[key] = fields[key]
            }
        }
        return obj
    }

    _getID = () => {
        return ++this._ID
    }

    _initializeID = () => {
        const lastItem = this.data[this.data.length -1]
        this._ID = lastItem.id
    }

    load = () => {
        this.data = require(this.filePath)
    }

    save = () => {
        const data = JSON.stringify(this.data, null, 2)
        fs.writeFileSync(this.filePath, data)
    }

    getAll = () => {
        return this.data
    } 

    findById = id => {
        id = parseInt(id)
        return this.data.find(item => item.id === id) || null
    }

    findByAttr = (attr, value) => {
        return this.data.filter(item => item[attr] === value)
    }

    findIndexOfId = id => {
        const len = this.data.length
        id = parseInt(id)
        for (let i=0; i < len; i++) {
            let item = this.data[i]
            if (item.id === id ) return i
        }
        return null
    }
}

module.exports = Model;