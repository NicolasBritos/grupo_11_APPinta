const bcrypt = require('bcryptjs')
const Model = require('./model.js')
const USER_DB = 'user.json'
const { INVALID_LOGIN_MSG, ACCOUNT_ALREADY_EXIST_MSG } = require('./modelMessages')
const NOT_IMG = 'default-avatar.jpg';

class UserModel extends Model {
    static _ID = 0

    validFieldsCreate = [
        'name', 'surname', 'email',
        'password', 'role', 'avatar'
    ]

    validFieldsUpdate = [
        'name', 'surname','avatar'
    ]

    constructor(dbFile) {
        super(dbFile, UserModel)
        this._initializeID()
    }

    _createImgField = fields => {
        if (!fields.avatar) fields.avatar = NOT_IMG
    }

    _updateImgField = (user, fields) => {
       if (!fields.avatar) fields.avatar = user.avatar
    }

    /**
     * Remueve el campo password de una copia del objeto user
     * @param {Object} user
     * @return {Object} user: objeto sin campo password
     */
    _clearUserObj = user => {
        /* Borrar la password antes de devolver el usuarios */
        const clearUser = JSON.parse(JSON.stringify(user))
        delete clearUser.password
        return clearUser
    }

    _findByEmail = email => {
        return  this.data.find(user => user.email === email) || null
    }

    _checkPassword = (email, password) => {
        // Email para buscar el usuario
        // password que se desea comparar
        const user = this._findByEmail(email)
        if (user) {
            if (user.password === password) return true
        }
        return false
    }

    _normalizeFields = fields => {
        fields.role = 2
        delete fields.id
    }

    /**
     * Busca un usuario mediante el id
     * @param {int} id: id a buscar 
     * @return {Object} response
     * {
     *  error: objeto con mensaje de error si ocurrio algun error, sino null,
     *  product: objeto product o null si no se encontro el objecto mediante el id
     * }
     */
    findById = id => {
        const user = this._findById(id)
        return {
            error: user? null: {message: ID_NOT_FOUND_MSG},
            user:  user? this._clearUserObj(user): null
        }
    }

    

    /**
     * Busca un usuario por email
     * @param {String} email 
     * @return {Object} user: si el usuario fue encontrado
     * @return {null} null: si el usuario no fue encontrado
     */
    findByEmail = email => {
        let user = this._findByEmail(email)
        if (user) {
            return this._clearUserObj(user)
        }
        return null
    }

    /**
     * Devuelve una lista de los usuarios cuyo rol es pasado como parametro
     * @param {int} role: rol a buscar 
     * @return {Array}: lista de usuarios con rol coincidente
     */
    findByRole = role => {
        return this.data.filter(user => user.role === role)
    }

    /**
     * Autentica a un usuario. Retorna un objecto user si el email y
     * la contraseña pasada como argumentos coinciden. De lo contrario null
     * @param {String} email
     * @param {String} password
     * @return {Object} response
     * {
     *   error: con objeto error o null si no se produjo ningun error,
     *   user: Con objeto user o null si se produjo un error
     * } 
     */
    login = (email, password) => {
        const logged = this._checkPassword(email, password) 
        if (!logged) return {
            error: { message: INVALID_LOGIN_MSG},
            user: null
        }
        return {
            error: null,
            user: this.findByEmail(email)
        }
    }

    /**
     * Registra a un usuario
     * @param {req.body} fields: con campos del usuario
     * @param {req.file} file: objeto con file
     * @return {Object} response
     * {
     *   error: con objeto error o null si no se produjo ningun error,
     *   user: Con objeto user o null si se produjo un error
     * }
     */
    register = (fields, file) => {
        if (this._findByEmail(fields.email)) {

            // funcion para borrar la imagen
            return {
                error: {message: ACCOUNT_ALREADY_EXIST_MSG},
                user: null
            }
        }

        let newUser = {id: this._getID()}
        fields.avatar = file? file.filename: ""
        this._normalizeFields(fields)
        this._createImgField(fields)
        this._encryptPassword(fields)
        Model.loadFieldsInObj(newUser, fields, this.validFieldsCreate)
        this.data.push(newUser)
        this.save()
        return {
            error: null,
            user: this._clearUserObj(newUser)
        }
    }

    /* Encriptacion de Password */
    _encryptPassword = (fields) => {
        const SALT = 10
        const original = fields.password
        fields.password = bcrypt.hashSync(original, SALT)
    }

    _checkPassword = (email, password) => {
        const user = this._findByEmail(email)
        if (user && bcrypt.compareSync(password, user.password)) {
            return true
        }
        return false
    }

    update = (id, fields, file) => {
        let user = null
        const userId = parseInt(id)
        const result = this.findById(userId)
        if (result.error) return result

        user = result.user
        fields.avatar = file? file.filename: undefined
        this._updateImgField(user, fields)
        Model.loadFieldsInObj(user, fields, this.validFieldsUpdate)
        this.save()
        return {
            error: null,
            user
        }
    }

}

const userModel = new UserModel(USER_DB);

module.exports = userModel;

