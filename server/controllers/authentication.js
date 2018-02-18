const config  = require('../config');
const jwt     = require('jsonwebtoken');
// const _       = require('lodash');

const User = require('../models/user');

// This should be a database of users :).
// const users = [{
//   id: 1,
//   username: 'gonto',
//   password: 'gonto'
// }];

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

// function getUserScheme(req) {
//
//   let username;
//   let type;
//   let userSearch = {};
//
//   if (req.body.username) {
//     // The POST contains a username and not an email
//     username = req.body.username;
//     type = 'username';
//     userSearch = { username: username };
//   } else if (req.body.email) {
//     // The POST contains an email and not an username
//     username = req.body.email;
//     type = 'email';
//     userSearch = { email: username };
//   }
//
//   return {
//     username: username,
//     type: type,
//     userSearch: userSearch
//   };
// }

// function index(req, res, next) {
//   User
//     .find()
//     .exec()
//     .then(users => res.status(200).json(users))
//     .catch(next);
// }

// function index(req, res) {
//   res.status(200).send({
//     users
//   });
// }

// function register(req, res) {
//   const userScheme = getUserScheme(req);
//
//   if (!userScheme.username || !req.body.password) {
//     return res.status(400).send('You must enter a username and password.');
//   }
//
//   if (_.find(users, userScheme.userSearch)) {
//     return res.status(400).send('A user with that username already exists.');
//   }
//
//   const profile = _.pick(req.body, userScheme.type, 'password', 'extra');
//   profile.id = _.max(users, 'id').id + 1;
//
//   users.push(profile);
//
//   res.status(201).send({
//     id_token: createIdToken(profile)
//   });
// }

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

// function login(req, res) {
//   const userScheme = getUserScheme(req);
//
//   if (!userScheme.username || !req.body.password) {
//     return res.status(400).send('You must enter a username and password');
//   }
//
//   const user = _.find(users, userScheme.userSearch);
//
//   if (!user) {
//     return res.status(401).send('Incorrect credentials.');
//   }
//
//   if (user.password !== req.body.password) {
//     return res.status(401).send('Incorrect credentials.');
//   }
//
//   res.status(201).send({
//     id_token: createIdToken(user)
//   });
// }

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
  // index: index,
  register: register,
  login: login
};
