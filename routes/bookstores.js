const router = require('express').Router();
const bookstoresCtrl = require('../controllers/bookstores');

router.get('/', bookstoresCtrl.index);

module.exports = router;