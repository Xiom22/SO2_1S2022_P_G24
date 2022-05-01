const generarConsulta  = require('../config/connection')
const QueryBook = require('../models/query.book');
const querys = new QueryBook()

exports.create = async(req,res)=> {
    try {
        await generarConsulta(querys.create(req.body))
        res.json({status:200, msg:'Libro creado exitosamente', data:[]})
    } catch (error) {
        console.log(error)
        res.json({status:500, msg:'Error al guardar libro', data: []})
    }
}

exports.update = async(req,res)=> {
    try {
        await generarConsulta(querys.update(req.body))
        res.json({status:200, msg:'Modificacion exitosamente', data:[]})
    } catch (error) {
        console.log(error)
        res.json({status:500, msg:'Error al modificar libro', data: []})
    }
}

exports.read = async(req,res)=> {
    try {
        data = await generarConsulta(querys.read(req.query.id))
        res.json({status:200, msg:'Data obtenida', data})
    } catch (error) {
        console.log(error)
        res.json({status:500, msg:'Error al leer libros', data: []})
    }
}