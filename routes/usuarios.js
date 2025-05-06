const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

//crear un usuario
router.post('/', async (req, res) =>{
    const nuevo = new Usuario(req.body);
    await nuevo.save();
    res.json(nuevo);
});

//Leer todos los usuarios
router.get('/', async (req, res)=> {
    const usuarios = await Usuario.find();
    res.json(usuarios);
});

//Leer uno solo
router.get('/:id', async (req, res)=> {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
});

//actualizar
router.put('/:id', async (req, res)=> {
    const actualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(actualizado);
});


//ELiminar
router.delete('/:id', async (req, resp)=>{
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({mensaje: 'usuario eliminado'});
});

module.exports = router;
