const generarConsulta  = require('../config/connection')
const QuerySeller = require('../models/query.seller');
const querys = new QuerySeller()

exports.login = async(req, res) => {
    try {
        let auth = req.body
        let datos = await generarConsulta(querys.login(auth));
        if(datos.length > 0){
            res.json(
                {
                    status:200, 
                    msg:'', 
                    data: datos[0]
                });
        }        
        else res.json({status:500, msg:'Error de autenticación.', data: []});
    } catch (error) {
        console.log(error)
        res.json({status:500, msg:'Error de autenticación.', data: []});
    }
}


exports.create = async(req,res)=> {
    try {
        await generarConsulta(querys.create(req.body))
        res.json({status:200, msg:'Vendedor creado exitosamente', data:[]})
    } catch (error) {
        console.log(error)
        res.json({status:500, msg:'Error al guardar vendedor', data: []})
    }
}

exports.update = async(req,res)=> {
    try {
        await generarConsulta(querys.update(req.body))
        res.json({status:200, msg:'Modificacion exitosamente', data:[]})
    } catch (error) {
        console.log(error)
        res.json({status:500, msg:'Error al modificar vendedor', data: []})
    }
}

exports.read = async(req,res)=> {
    try {
        data = await generarConsulta(querys.read(req.query.id))
        res.json({status:200, msg:'Data obtenida', data})
    } catch (error) {
        console.log(error)
        res.json({status:500, msg:'Error al leer vendedores', data: []})
    }
}

exports.listar = async(req,res)=> {
    try {
        data = await generarConsulta(querys.list())
        res.json({status:200, msg:'Data obtenida', data})
    } catch (error) {
        console.log(error)
        res.json({status:500, msg:'Error al leer libros', data: []})
    }
}