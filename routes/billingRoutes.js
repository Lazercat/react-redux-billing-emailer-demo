const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    console.log('i am /api/stripe... someone wanted me.');

    if (!req.user) {
      return res.status(401).send('error: user must be logged in.');
    }
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    console.log('yo i am charge object.' + charge);
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
