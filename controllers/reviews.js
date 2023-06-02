const Application = require('../models/application');

module.exports = {
    index,
    addReview,
    showNewReviewPage
}


async function addReview(req, res, next) {
    const { id } = req.params;
    const application = await Application.findById(id);
    try {
        // console.log(id);
        const { review } = req.body;
        const { rating } = req.body;
        // console.log(rating);
        // console.log(review)
        // console.log(application);
        application.reviews.push(req.body);
        await application.save();
    } catch (err) {
        console.log(err);
        res.render('applications/show', { errorMsg: err.message });
        next();
    }
    res.redirect(`/applications/${application._id}`)// { title: ` Application`, application })
}

async function showNewReviewPage(req, res, next) {
    try {
        const { id } = req.params;
        console.log(id)
        const application = await Application.findById(id);
        console.log(application)
        res.render('reviews/new', { title: `Add Review on`, application })
    } catch (err) {
        console.log(err);
        res.send('test')// { errorMsg: err.message });
        next();
    }
}

function index(req, res) {
    res.render('reviews/index', { title: 'Reviews' });
}