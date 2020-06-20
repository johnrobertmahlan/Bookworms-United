// Require modules

const router = require('express').Router();
const bookstoresCtrl = require('../controllers/bookstores');

// Identify routes

router.get('/', bookstoresCtrl.index);
router.get('/new', bookstoresCtrl.new);
router.post('/', bookstoresCtrl.create);
router.get('/:id', bookstoresCtrl.show);

// Export router

module.exports = router;