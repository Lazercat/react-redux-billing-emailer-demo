//keys.js
if (process.env.NODE_ENV === 'production') {
  //app is running in Prod
  module.exports = require('./prod');
} else {
  //app is running in Dev
  module.exports = require('./dev');
}
