const router = require('express').Router();
const auth  = require('../controllers/authentication');

// /users Routes
router.route('/users')
  .get(auth.index)
  .post(auth.register);

// /sessions Route
router.route('/sessions/create')
  .post(auth.login);

module.exports = router;
