const jwt = require('jsonwebtoken');

const generarJWT = (id_user, id_rol) => {
    return new Promise((resolve, reject) => {
        const payload = {id_user, id_rol};
        jwt.sign(payload, 'SiSaleSA_', {
            expiresIn: '24h'
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('No se pudo generar el token');
            }else{
                resolve(token);
            }
        });
    });
}

module.exports = {
    generarJWT
}