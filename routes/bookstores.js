const router = require('express').Router();
const bookstoresCtrl = require('../controllers/bookstores');

router.get('/', bookstoresCtrl.index);

router.get('/new', bookstoresCtrl.new);
router.post('/', bookstoresCtrl.create);

module.exports = router;