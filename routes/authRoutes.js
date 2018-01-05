const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.send('yo hallo user: ' + req.user);
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user + ' nope');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
