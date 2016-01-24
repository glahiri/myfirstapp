// models/pollitem.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PollItemSchema   = new Schema({
    question: String,
    active: Boolean
    options: Array
});

module.exports = mongoose.model('PollItem', PollItemSchema);
