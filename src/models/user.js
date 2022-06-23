const Model = require('./model.js')
const USER_DB = 'user.json'

const NOT_IMG = 'default-avatar.jpg';

class UserModel extends Model {
    static _ID = 0

    validFields = [
        'name', 'surname', 'email',
        'password', 'role', 'avatar'
    ]

    constructor(dbFile) {
        super(dbFile, UserModel)
        this._initializeID()
    }

    _createImgField = fields => {
        if (!fields.image) fields.avatar = NOT_IMG
    }

    _updateImgField = (user, fields) => {
       if (!fields.image) fields.avatar = user.image
    }

    _normalizeUserObj = user => {
        /* Borrar la password antes de devolver el usuarios */
        const normalizeUser = JSON.parse(JSON.stringify(user))
        delete normalizeUser.password
        return normalizeUser
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
        delete fields.id
    }

    /**
     * Busca un usuario por email
     * @param email 
     * @return user (Object): si el usuario fue encontrado
     * @return (null): si el usuario no fue encontrado
     */
    findByEmail = email => {
        let user = this._findByEmail(email)
        if (user) {
            return this._normalizeUserObj(user)
        }
        return null
    }

    /**
     * Devuelve una lista de los usuarios cuyo rol es pasado como parametro
     * @param role (string): rol a buscar 
     * @return (Array): lista de usuarios con rol coincidente
     */
    findByRole = role => {
        return this.data.filter(user => user.role === role)
    }

    /**
     * Autentica a un usuario
     * @param email (String)
     * @param password (String)
     * @return true or false (boolean): true si se encontro en email y
     * la contraseña pasada como argumento coincide. De lo contrario false
     */
    login = (email, password) => {
        return this._checkPassword(email, password) 
    }

    /**
     * Registra a un usuario
     * @param fields (Object): con campos del usuario
     * @return newUser (Object): usuario agregado
     * @return objError(Object): objeto con descripcion del error
     */
    register = fields => {
        if (this._findByEmail(fields.email)) {
            return {
                error: true,
                message: 'Ya existe el email'
            }
        }

        let newUser = {id: this._getID()}
        this._normalizeFields(fields)
        this._createImgField(fields)
        Model.loadFieldsInObj(newUser, fields, this.validFields)
        this.data.push(newUser)
        this.save()
        return this._normalizeUserObj(newUser)
    }

}

const userModel = new UserModel(USER_DB);

module.exports = userModel;

