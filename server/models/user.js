const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: 'Username is required.', unique: 'That username has already been taken.' },
  // email: { type: String, required: 'Email is required.', unique: 'That email has already been taken.' },
  // image: { type: String },
  password: { type: String, required: 'Password is required.' },
  leagues: [{ type: mongoose.Schema.ObjectId, ref: 'League' }]
  // picks: [{ type: mongoose.Schema.ObjectId, ref: 'Pick' }]
}, {
  timestamps: true
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json.__v;
    delete json.password;
    delete json.passwordConfirmation;
  }
});

module.exports = mongoose.model('User', userSchema);
