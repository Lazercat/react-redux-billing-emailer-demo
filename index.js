const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

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
app.get('*', (req, res) => {
  res.send('howdy. I am app.');
});

//set port and run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log('app listening on port ' + PORT);
});
