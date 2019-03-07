const passport = require('passport');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const config = require('./config');
const User = require('./api/users/model');

// Google OAuth Strategy
passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: config.oauth.google.clientID,
    clientSecret: config.oauth.google.clientSecret
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log('profile', profile);
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
    } catch(error) {
        done(error, false, error.message);
    }
}));
