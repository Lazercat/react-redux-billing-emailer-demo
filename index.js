const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');
require('./models/User.js');
require('./services/passport.js');

//db configure
mongoose.connect(keys.MONGO_URI);

//set app to express
const app = express();

//include the express routes.
require('./routes/authRoutes')(app);

//set port and run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log('app listening on port ' + PORT);
});
