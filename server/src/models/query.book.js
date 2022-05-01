
class QueryBook{    
    create(book){
        return `INSERT INTO libro(nombre,precio) 
        VALUES ('${book.nombre}', ${book.precio})`
    }

    update(book){
        return `UPDATE book SET precio = ${book.precio}, nombre = '${book.nombre}' 
        WHERE id = '${book.id}'`
    }

    read(id){
        if(id) return `SELECT * FROM libro WHERE id = ${id}`
        return `SELECT * FROM libro`
    }
}

module.exports = QueryBook