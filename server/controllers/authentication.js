const config  = require('../config');
const jwt     = require('jsonwebtoken');
const _       = require('lodash');

// This should be a database of users :).
const users = [{
  id: 1,
  username: 'gonto',
  password: 'gonto'
}];

function createIdToken(user) {
  return jwt.sign({
    usr: user.id,
    iss: config.issuer,
    aud: config.audience,
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    scope: 'full_access',
    sub: 'lalaland|gonto',
    jti: genJti(), // unique identifier for the token
    alg: 'HS256'
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

function getUserScheme(req) {

  let username;
  let type;
  let userSearch = {};

  if (req.body.username) {
    // The POST contains a username and not an email
    username = req.body.username;
    type = 'username';
    userSearch = { username: username };
  } else if (req.body.email) {
    // The POST contains an email and not an username
    username = req.body.email;
    type = 'email';
    userSearch = { email: username };
  }

  return {
    username: username,
    type: type,
    userSearch: userSearch
  };
}

function index(req, res) {
  res.status(200).send({
    users
  });
}

function register(req, res) {
  const userScheme = getUserScheme(req);

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send('You must enter a username and password.');
  }

  if (_.find(users, userScheme.userSearch)) {
    return res.status(400).send('A user with that username already exists.');
  }

  const profile = _.pick(req.body, userScheme.type, 'password', 'extra');
  profile.id = _.max(users, 'id').id + 1;

  users.push(profile);

  res.status(201).send({
    id_token: createIdToken(profile)
  });
}

function login(req, res) {
  const userScheme = getUserScheme(req);

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send('You must enter a username and password');
  }

  const user = _.find(users, userScheme.userSearch);

  if (!user) {
    return res.status(401).send('Incorrect credentials.');
  }

  if (user.password !== req.body.password) {
    return res.status(401).send('Incorrect credentials.');
  }

  res.status(201).send({
    id_token: createIdToken(user)
  });
}

module.exports = {
  index: index,
  register: register,
  login: login
};
