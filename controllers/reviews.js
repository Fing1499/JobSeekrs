const Application = require('../models/application');

module.exports = {
    index,
    addReview,
    showNewReviewPage,
    showCompanyReviews
}

async function showCompanyReviews(req, res, next) {
    try {
        const { companyName } = req.params;
        //! change to find one is problem arises with this 
        const company = await Application.find({ companyName: companyName });
        res.render('reviews/show', { title: `${companyName} Reviews`, company });
    } catch (err) {
        console.log(err);
        res.send('test');
        next();
    }
}


async function addReview(req, res, next) {
    const { id } = req.params;
    const application = await Application.findById(id);
    try {
        const { review } = req.body;
        const { rating } = req.body;
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
        const application = await Application.findById(id);
        res.render('reviews/new', { title: `Add Review on`, application })
    } catch (err) {
        console.log(err);
        res.send('test');
        next();
    }
}

 async function index(req, res, next) {
    try {
        const application = await Application.find({});
        res.render('reviews/index', { title: 'Reviews', application });
    } catch (err) {
        console.log(err);
        res.send('test');
        next();
    }

}