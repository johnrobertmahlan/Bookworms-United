// Require modules

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

// Allow the user to log in using OAuth

passport.use(new GoogleStrategy( {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, refreshToken, profile, cb) {

    // Check to see whether this user already has a Google account
    User.findOne({ 'googleId': profile.id}, function(err, user) {

        // If user does not have a Google account, return an error blocking user from logging in
        if(err) return cb(err);
        
        // If user has a Google account and has logged in before, let them log in
        if(user) {
            return cb(null, user);
        
        // If user has a Google account but has not logged in before, create a new user and log them in
        } else {
            const newUser = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
                avatarURL: profile.photos[0].value
            });
            newUser.save(function(err) {
                if(err) return cb(err);
                return cb(null, newUser);
            });
        }
    })
    }
))

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});