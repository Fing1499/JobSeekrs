const Application = require('../models/application');


module.exports = {
    index,
    new: newApplication,
    create: createApplication,
    show
}

async function show(req, res, next) {
    try {
        const { id } = await req.params;
        const application = await Application.findById(id);
        res.render('applications/show', { title: `${application.companyName} Application`, application });
    } catch (err) {
        console.log(err);
        res.render('applications/index', { errorMsg: err.message });
        next();
    }
}

async function index(req, res, next) {
    const applications = await Application.find({});
    res.render('applications/index', { title: 'DashBoard', applications });
}

function newApplication(res, res) {
    res.render('applications/new', { title: 'New Application' });
}

async function createApplication(req, res, next) {
    try {
        const application = await Application.create(req.body);
        res.redirect('/applications');
        console.log('added to database');
    } catch (err) {
        console.log(err);
        res.render('applications/new', { errorMsg: err.message });
    }
}