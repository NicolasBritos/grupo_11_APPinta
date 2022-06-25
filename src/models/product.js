const Model = require('./model.js')
const PRODUCT_DB = 'product.json'

const NOT_IMG = 'img-not-found.jpg';

class ProductModel extends Model {

    static _ID = 0

    validFields = [
        'name', 'price', 'score',
        'category', 'description', 'image'
    ]

    constructor(dbFile) {
        super(dbFile)
        this._initializeID()
    }

    static _formatCategoryName = category => {
        /* Formato para poder generar una attr de obj */
        return category.replaceAll("-", "")
    }

    _createImgField = fields => {
        if (!fields.image) fields.image = NOT_IMG
    }

    _updateImgField = (product, fields) => {
       if (!fields.image) fields.image = product.image
    }

    _normalizeFields = fields => {
        // Price
        fields.price = parseInt(fields.price)

        //Score
        if (fields.score == "") {
            fields.score = 0
        } else {
            fields.score = parseInt(fields.score)
        }

        // Remove id
        delete fields.id
    }
    
    /**
     * Crear un producto
     * @param {req.body} fields: objeto con los campos del form
     * @param {req.file} file: objeto con el file
     * @return {Object} response
     * {
     *   error: con objeto error o null si no se produjo ningun error
     *   product: Con objeto product o null si se produjo un error
     * }
     */
    create = (fields, file) => {
        fields.image = file? file.filename: undefined 
        this._normalizeFields(fields)
        this._createImgField(fields)
        const newProduct = Model.loadFieldsInObj({id: this._getID()}, fields, this.validFields)
        this.data.push(newProduct)
        this.save()
        return {
            error: null,
            product: newProduct
        }
    }

    /**
     * Actualiza un producto
     * @param {int} id: id del producto
     * @param {req.body} fields: con campos a actualizar
     * @param {req.file} file: con la imagen a agregar
     * @return {Object} response
     * {
     *   error: con objeto error o null si no se produjo ningun error
     *   product: Con objeto product o null si se produjo un error
     * }
     */
    update = (id, fields, file) => {
        const product = this.findById(id)

        if (!product) return {
            error: {
                message: 'No se encontro el ID'
            }, 
            product: null
        }

        fields.image = file? file.filename: undefined 
        this._updateImgField(product, fields)
        this._normalizeFields(fields)
        Model.loadFieldsInObj(product, fields, this.validFields)
        this.save()
        return {
            error: null,
            product
        }
    }
    
    /**
     * Elimina un producto
     * @param {int} id 
     * @return {Object} response
     * {
     *   error: con objeto error o null si no se produjo ningun error
     *   index: Indice del producto eliminado
     * }
     */
    remove = id => {
        const idx = this.findIndexOfId(id)
        console.log('id ' + id)
        console.log('idx ' + idx)

        if (!idx) return {
            error: {
                message: 'No se encontro el ID'
            },
            index: null
        }

        this.data.splice(idx, 1)
        this.save()
        return {
            error: null,
            index: idx
        }
    }

    /**
     * Busca los producto en base a la categoria pasada como parametro
     * @param {String} category (string) 
     * @return {Array}: Lista con los productos coincidentes con la categoria
     */
    findByCategory = category => {
        return this.data.filter(item => item.category === category)
    }

    /**
     * Retorna la lista de categorias existentes
     * @return {Array} categories: Lista de categorias
    */
    getCategories = () => {
        const categories = []
        for (let product of this.data) {
            let category = product.category
            if (!categories.includes(category) && category !== "") {
                categories.push(category)
            }
        }
        return categories
    }

    /** Retorna objeto con las categorias como claves
     * y la lista de productos filtrados por categories como valores 
     * @return {Object} result
     * */ 
    getAllByCategories = () => {
        
        const categories = this.getCategories()
        const result = {}
        for (let category of categories) {
            const formatCategory = ProductModel._formatCategoryName(category)
            result[formatCategory] = this.findByCategory(category)
        }
        return result
    }

    /**
     * Busca un producto por el atributo name
     * @param {String} toSearch
     * @return {Array}: Lista con los productos cuyo name son coincidentes con toSearch
     */
    searchByName = toSearch => {
        if (toSearch === null) return this.data
        return this.data.filter(product => product.name.includes(toSearch))
    }
}

const productModel = new ProductModel(PRODUCT_DB);

module.exports = productModel;