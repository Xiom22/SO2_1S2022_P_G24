const generarConsulta  = require('../config/connection')
const QuerySell = require('../models/query.sell');
const querys = new QuerySell()

exports.create = async(req,res)=> {
    try {
        await generarConsulta(querys.create(req.body))
        res.json({status:200, msg:'Venta exitosa', data:[]})
    } catch (error) {
        console.log(error)
        res.json({status:500, msg:'Error al procesa la venta', data: []})
    }
}

exports.update = async(req,res)=> {
    try {
        await generarConsulta(querys.update(req.body))
        res.json({status:200, msg:'Modificacion exitosamente', data:[]})
    } catch (error) {
        console.log(error)
        res.json({status:500, msg:'Error al modificar la venta', data: []})
    }
}

exports.read = async(req,res)=> {
    try {
        data = await generarConsulta(querys.read(req.query.id))
        res.json({status:200, msg:'Data obtenida', data})
    } catch (error) {
        console.log(error)
        res.json({status:500, msg:'Error al leer ventas', data: []})
    }
}