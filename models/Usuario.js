const moongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    correo: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);
