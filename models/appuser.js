// models/appuser.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    email: String,
    type: String,
    isActive: boolean
});

module.exports = mongoose.model('AppUser', UserSchema);
