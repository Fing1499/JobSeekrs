const Application = require('../models/application');

module.exports = {
    index,
    addReview,
    showNewReviewPage
}


async function addReview(req, res, next) {
    try {
        const { id } = req.params;
        // const { review } = req.body;
        // const { rating } = req.body;
        // console.log(rating);
        // console.log(review)
        const application = await Application.findOne({ id });
        console.log(application);
        application.reviews.push(req.body);
        await application.save();
        res.redirect(`applications/${application._id}`, { title: `${application.companyName} Application`, application })
    } catch (err) {
        console.log(err);
        res.render('applications/show', { errorMsg: err.message });
        next();
    }
}

async function showNewReviewPage(req, res, next) {
    try {
        const { companyName } = req.params;
        const application = await Application.findOne({ companyName });
        console.log(companyName);
        res.render('reviews/new', { title: `Add Review on ${companyName}`, companyName, application })
    } catch (err) {
        console.log(err);
        res.render('applications/show', { errorMsg: err.message });
        next();
    }
}

function index(req, res) {
    res.render('reviews/index', { title: 'Reviews' });
}