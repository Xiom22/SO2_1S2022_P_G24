const { Router} = require("express");
const router = Router();
const { update, read, create } = require('../controller/controller.sell')

router.post('/',create)

router.get('/',read)

router.put('/', update)

module.exports = router;