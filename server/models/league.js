const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
  name: { type: String, required: 'A league name is required.' },
  stake: { type: Number, required: 'Stake is required. Enter 0 if playing for pride is enough.' },
  code: { type: Number, required: true }
});

leagueSchema
  .virtual('users', {
    ref: 'User',
    localField: '_id',
    foreignField: 'leagues'
  });

leagueSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json.__v;
    delete json.password;
    delete json.passwordConfirmation;
  }
});

// leagueSchema
//   .virtual('picks', {
//     ref: 'Pick',
//     localField: '_id',
//     foreignField: 'league'
//   });

module.exports = mongoose.model('League', leagueSchema);
