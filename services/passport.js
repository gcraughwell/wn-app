const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//gets access to the user model
const User = mongoose.model('users');

//turns the user into acookie
passport.serializeUser((user, done) => {
  //null so no errors and passed the user id
  //user.id is the user's id in mongo
  done(null, user.id);
});

//deserializeUser pulls the user from the cookie
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
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    //creates a new record of googleId user profile from google and .save() it to the db.
    (accessToken, refreshToken, profile, done) => {
      //check the collection for see if the user has logged in before
      User.findOne({googleId: profile.id}).then(existingUser => {
        if (existingUser) {
          //we already have a user matching that ID
          done(null, existingUser);
        } else {
          //we don't have a user with that id lets make one
          //new User creates a new model instance of user
          new User({googleId: profile.id})
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
