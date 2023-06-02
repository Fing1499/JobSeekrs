const Application = require('../models/application');

module.exports = {
    index,
    addReview,
    showNewReviewPage,
    showCompanyReviews
}

async function showCompanyReviews(req, res, next) {
    try {
        const companyName = req.params.companyName;
        const company = await Application.find({ companyName: companyName });
        console.log(req.params);
        console.log(company)
        console.log(companyNames);
        res.render('reviews/show', { title: `${company.companyName} Reviews`, company });
    } catch (err) {
        console.log(err);
        res.send('test')// { errorMsg: err.message });
        next();
    }
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

 async function index(req, res, next) {
    try {
        const application = await Application.find({});
        res.render('reviews/index', { title: 'Reviews', application });
    } catch (err) {
        console.log(err);
        res.send('test')// { errorMsg: err.message });
        next();
    }

}