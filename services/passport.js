const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: keys.googleCallbackURL
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log('accessToken: ' + accessToken);
      // console.log('refreshToken: ' + refreshToken);
      // console.log('profile: ' + JSON.stringify(profile));
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //we have a record
          console.log('record found!' + existingUser);
          done(null, existingUser);
        } else {
          //make new record
          new User({ googleId: profile.id })
            //save to mongodb
            .save()
            //close passport by calling done on user.
            .then(user => done(null, user));
        }
      });
    }
  )
);
