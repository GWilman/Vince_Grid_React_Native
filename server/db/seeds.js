const mongoose   = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/vince-native=${env}`;

const User = require('../models/user');
// const Team = require('../models/team');
// const Player = require('../models/player');
// const League = require('../models/league');
// const Pick = require('../models/pick');

mongoose.connect(dbURI);

User.collection.drop();
// Team.collection.drop();
// Player.collection.drop();
// League.collection.drop();
// Pick.collection.drop();

setTimeout(() => {
  console.log('user collection dropped');
  mongoose.connection.close();
}, 1000);
