const Application = require('../models/application');

module.exports = {
    index
}

async function index(req, res, next) {
    res.render('reviews/index', { title: 'Reviews' });
}