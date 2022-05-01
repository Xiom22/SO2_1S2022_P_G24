const mysql = require('mysql')

const connection = mysql.createPool({
    host: 'sa-db.cgrtxtxmniwe.us-east-1.rds.amazonaws.com',
    user: 'adminsa',
    password: '12345678',
    database: 'sopes2',
    port: 7778,
    multipleStatements: 'true'
})

const generarConsulta = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, result, fields)=> {
            if(error) return reject(error);
            return resolve(result);
        })
    })
}

module.exports = generarConsulta