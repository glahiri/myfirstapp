// models/newsitem.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NewsItemSchema   = new Schema({
    title: String,
    detail: String,
    question: String
});

module.exports = mongoose.model('NewsItem', NewsItemSchema);
