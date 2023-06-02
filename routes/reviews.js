const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', reviewsCtrl.index)

router.get('/:id/new', reviewsCtrl.showNewReviewPage);

router.post('/:id', reviewsCtrl.addReview);

module.exports = router;