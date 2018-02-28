const router   = require('express').Router();
const auth     = require('../controllers/authentication');
const leagues  = require('../controllers/leagues');
const users    = require('../controllers/users');

// /users Routes
router.route('/users')
  // .get(auth.index)
  .post(auth.register);

// /users/:id Routes
router.route('/users/:id')
  .get(users.show)
  .put(users.update);

// /sessions Route
router.route('/sessions/create')
  .post(auth.login);

// /leagues Routes
router.route('/leagues')
  .get(leagues.index)
  .post(leagues.create);


module.exports = router;
