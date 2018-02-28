const config  = require('../config');
const jwt     = require('jsonwebtoken');

const User = require('../models/user');

function createIdToken(user) {
  return jwt.sign({
    userId: user._id,
    username: user.username,
    expiresIn: '24hr',
    jti: genJti() // unique identifier for the token
  }, config.secret);
}

// Generate Unique Identifier for the access token
function genJti() {
  let jti = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 16; i++) {
    jti += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return jti;
}

function register(req, res, next) {
  User
    .create(req.body)
    .then(user => {
      if (user.status === 500) return res.status(500).send('A user with that username already exists.');
      console.log(user);
      const token = createIdToken(user);
      return res.json({ message: `Welcome ${user.username}!`, token, user });
    })
    .catch(next);
}

function login(req, res, next) {
  User
    .findOne({ username: req.body.username })
    .then((user) => {
      if(!user) {
        return res.status(401).send('No user found');
      }
      const token = createIdToken(user);
      return res.json({ message: `Welcome back ${user.username}!`, token, user });
    })
    .catch(next);
}

module.exports = {
  register: register,
  login: login
};
