// Require modules

const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// Identify routes

router.post('/bookstores/:id/reviews', reviewsCtrl.create);
router.get('/reviews/:id', reviewsCtrl.show);
router.put('/reviews/:id', reviewsCtrl.edit);
router.delete('/reviews/:id', reviewsCtrl.delete);

// Export router
module.exports = router;