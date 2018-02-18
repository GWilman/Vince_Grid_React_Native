const League = require('../models/league');

function leaguesIndex(req, res, next) {
  League
    .find()
    .exec()
    .then(leagues => res.json(leagues))
    .catch(next);
}

function leaguesCreate(req, res, next) {
  // req.body.createdBy = req.currentUser;

  League
    .create(req.body)
    .then(league => res.status(201).json(league))
    .catch(next);
}

module.exports = {
  index: leaguesIndex,
  create: leaguesCreate
  // show: leaguesShow,
  // update: leaguesUpdate,
  // delete: leaguesDelete
};
