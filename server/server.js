const logger       = require('morgan');
const cors         = require('cors');
const http         = require('http');
const express      = require('express');
const errorhandler = require('errorhandler');
const dotenv       = require('dotenv');
const bodyParser   = require('body-parser');
const routes       = require('./config/routes');
const env          = process.env.NODE_ENV || 'development';
const dbURI        = process.env.MONGODB_URI || `mongodb://localhost/vince-native=${env}`;


const app = express();

dotenv.load();

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(function(err, req, res, next) {
  if (err.name === 'StatusError') {
    res.send(err.status, err.message);
  } else {
    next(err);
  }
});

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(errorhandler());
}

// app.use(require('./anonymous-routes'));
// app.use(require('./protected-routes'));
app.use(routes);

const port = process.env.PORT || 3001;

http.createServer(app).listen(port, function () {
  console.log('listening in http://localhost:' + port);
});
