
class QuerySell{
    create(sell){
        return `INSERT INTO venta(fecha,id_libro,id_vendedor) 
        VALUES (NOW(), ${sell.id_libro}, ${sell.id_vendedor})`
    }

    update(sell){
        return `UPDATE venta SET fecha = '${sell.fecha}', id_libro = ${sell.id_libro}, id_vendedor = ${sell.id_vendedor} 
        WHERE id_vendedor = ${sell.id_vendedor}`
    }

    read(id){
        if(id) return `SELECT v.*, l.nombre, l.precio, concat(ve.dpi, ' - ', ve.nombre, ' ' , ve.apellido) as vendedor, ve.id_vendedor 
        FROM venta v, libro l, vendedor ve WHERE id_venta = ${id}`
        return `SELECT v.*, l.nombre, l.precio, concat(ve.dpi, ' - ', ve.nombre as, ' ' , ve.apellido) as vendedor, ve.id_vendedor 
        FROM venta v, libro l, vendedor ve`
    }
}

module.exports = QuerySell