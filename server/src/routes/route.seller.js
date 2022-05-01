const { Router} = require("express");
const router = Router();
const { update, login, read, create, listar } = require('../controller/controller.seller')

router.post('/login',login)

router.post('/',create)

router.get('/',read)

router.get('/list',listar)

router.put('/', update)

module.exports = router;