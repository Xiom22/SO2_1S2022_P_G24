
class QuerySeller{
    login(auth) {
        return `SELECT id_vendedor, concat(dpi, ' - ', nombre, ' ', apellido) as vendedor FROM vendedor WHERE dpi = '${auth.dpi}' and clave = '${auth.clave}'`
    }
    
    create(seller){
        return `INSERT INTO vendedor(dpi,nombre,apellido,direccion,telefono,clave) 
        VALUES ('${seller.dpi}', '${seller.nombre}', '${seller.apellido}', '${seller.direccion}', '${seller.telefono}', '${seller.clave}')`
    }

    update(seller){
        return `UPDATE vendedor SET dpi = '${seller.dpi}', nombre = '${seller.nombre}', apellido = '${seller.apellido}', 
        direccion = '${seller.direccion}', telefono = '${seller.telefono}' 
        WHERE id_vendedor = ${seller.id_vendedor}`
    }

    read(id){
        if(id) return `SELECT * FROM vendedor WHERE id_vendedor = ${id}`
        return `SELECT * FROM vendedor`
    }

    list(){
        return `SELECT id_vendedor, concat(dpi, ' - ', nombre, ' ', apellido) as vendedor FROM vendedor`
    }
}

module.exports = QuerySeller