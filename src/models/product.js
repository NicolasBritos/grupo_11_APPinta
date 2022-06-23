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
     * @param id (int): id del producto
     * @param fields  (Object): con campos a actualizar
     * @return product (Object): si se pudo agregar
     */
    create = (fields, file) => {
        fields.image = file? file.filename: undefined 
        let newProduct = {id: this._getID()}
        this._normalizeFields(fields)
        this._createImgField(fields)
        Model.loadFieldsInObj(newProduct, fields, this.validFields)
        this.data.push(newProduct)
        this.save()
        return newProduct
    }

    /**
     * Actualiza un producto
     * @param id (int): id del producto
     * @param fields  (Object): con campos a actualizar
     * @param file (Object): con la imagen a agregar
     * @return product (Object): si se pudo agregar
     * @return objError (Object): objeto con descripcion del error
     */
    update = (id, fields, file) => {
        const product = this.findById(id)

        if (product) return {
            error: true,
            message: 'No se encontro el ID'
        }

        fields.image = file? file.filename: undefined 
        this._updateImgField(product, fields)
        this._normalizeFields(fields)
        Model.loadFieldsInObj(product, fields, this.validFields)
        this.save()
        return product
    }
    
    /**
     * Elimina un producto
     * @param id (int)
     * @return true (boolean)
     * @return objError (Object): objeto con descripcion del error
     */
    remove = id => {
        const idx = this.findIndexOfId(id)
        console.log('id ' + id)
        console.log('idx ' + idx)

        if (!idx) return {
            error: true,
            message: 'No se encontro el ID'
        }

        this.data.splice(idx, 1)
        this.save()
        return true
    }

    /**
     * Busca los producto en base a la categoria pasada como parametro
     * @param category (string) 
     * @return (Array)
     */
    findByCategory = category => {
        return this.data.filter(item => item.category === category)
    }

    /**
     * Retorna la lista de categorias existentes
     * @return categories (Array)
    */
    getCategories = () => {
        const categories = []
        for (let product of this.data) {
            if (!categories.includes(product.category)) {
                categories.push(product.category)
            }
        }
        return categories
    }

    /** Retorna objeto con las categorias como claves
     * y la lista de productos filtrados por categories como valores 
     * @return result (Object)
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
     * @param toSearch (String)
     * @returns (Array)
     */
    searchByName = toSearch => {
        if (toSearch === null) return this.data
        return this.data.filter(product => product.name.includes(toSearch))
    }
}

const productModel = new ProductModel(PRODUCT_DB);

module.exports = productModel;