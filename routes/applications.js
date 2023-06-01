const express = require('express');
const router = express.Router();
const applicationCtrl = require('../controllers/applications');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', applicationCtrl.index);

router.get('/new', applicationCtrl.new);

router.get('/:id', applicationCtrl.show);

router.post('/', applicationCtrl.create);

router.get('/:id/edit', applicationCtrl.showEdit);

router.put('/:id', applicationCtrl.updateApplication);




module.exports = router;