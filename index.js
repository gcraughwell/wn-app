const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

//imports passportjs /google
require('./dbmodels/User');
require('./services/passport');

//moongoose connects to mongo lab database
mongoose.connect(keys.mongoURI);

const app = express();

//cookieSession for sending user data
app.use(
  cookieSession({
    //cookieSession lasts 30days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//adding the route and callback route for the auth with google
require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  //express serves up prod assets
  app.use(express.static('client/build'));

  //express will serve up index.html even if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
