const express = require('express');
const jwt     = require('express-jwt');
const config  = require('./config');
const quoter  = require('./quoter');

const app = module.exports = express.Router();

// Validate access_token
const jwtCheck = jwt({
  secret: config.secret,
  audience: config.audience,
  issuer: config.issuer
});

// Check for scope
function requireScope(scope) {
  return function (req, res, next) {
    const hasScopes = (req.user.scope === scope);
    if (!hasScopes) {
      res.sendStatus(401);
      return;
    }
    next();
  };
}

app.use('/api/protected', jwtCheck, requireScope('full_access'));

app.get('/api/protected/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});
