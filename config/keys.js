//keys.js
if (process.env.NODE_ENV === 'production') {
  //app is running in Prod
  console.log('I AM PROD');
  module.exports = require('./prod.js');
} else {
  //app is running in Dev
  console.log('I AM DEV');
  module.exports = require('./dev.js');
}
