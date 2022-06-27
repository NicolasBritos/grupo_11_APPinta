const Model = require('./model.js')
const CATEGORY_DB = 'category.json'

class CategoryModel extends Model {

    // static _ID = 0

    constructor(dbFile) {
        super(dbFile)
        // this._initializeID()
    }

    /**
     * Retorna la lista de categorias existentes
     * @return {Array} categories: Lista de categorias
    */
    getAll = () => {
        return this.data
    }
}

const categoryModel = new CategoryModel(CATEGORY_DB);

module.exports = categoryModel;