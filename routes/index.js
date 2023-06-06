var express = require('express');
var router = express.Router();
const passport = require('passport');
const Application = require('../models/application');


router.get('/', async function(req, res, next) {
  try {
    const applications = await Application.find({});
    const user = req.user.id
    res.render('applications/index', { title: 'DashBoard', applications, user });
  } catch(err) {
    console.log(err);
    res.render('index', { errorMsg: err.message });
    next();
   } 
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/applications',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
