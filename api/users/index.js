const express = require('express');
const router = express.Router();
const controller = require('./controller');
const passport = require('passport');

router.route('/').post(controller.postUser);
router.route('/oauth/google')
    .post(
        passport.authenticate('googleToken', { session: false }),
        controller.googleOAuth
    );

module.exports = router;