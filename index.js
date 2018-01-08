const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys.js');
require('./models/User.js');
require('./services/passport.js');

//db configure
mongoose.connect(keys.mongoURI);

//set app to express
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//include the express routes.
require('./routes/authRoutes')(app);
// app.get('*', (req, res) => {
//   res.send('howdy. I am app.');
// });

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//set port and run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log('app listening on port ' + PORT);
});
