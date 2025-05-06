const express = require('express');
const mongoose = require('mongoose');

const app = express();
const puerto = 3000;

//Middleware para leer JSON
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/miApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Conectao a MongoDB'))
.catch(err => comsole.error('Error al conectar ', err));

//Rutas
const rutasUsuarios = require('./routes/usuarios');
app.use('/usuarios', rutasUsuarios);

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});