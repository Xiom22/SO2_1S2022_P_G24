const { Router} = require("express");
const router = Router();
const { update, login, read, create } = require('../controller/controller.seller')

router.post('/login',login)

router.post('/',create)

router.get('/',read)

router.put('/', update)

module.exports = router;