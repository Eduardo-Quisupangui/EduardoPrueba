const mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}

let usuarioSchema = new Schema({
    marca: {
        type: String,
        required: [true, 'la marca es requerido']
    },
    modelo: {
        type: String,
        required: [true, 'El modelo es requerido']

    },
    serie: {
        type: Number,
        required: true
    },
    color: {
        type: Boolean,
        default: false
    },
    ip: {
        type: String,
        required: true
    },

    contador: {
        type: Number,
        default: 0
    },
    precio: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }
});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

module.exports = mongoose.model('impresoras', usuarioSchema); //para gurardar nombre de la tabla