// models/newsitem.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NewsItemSchema   = new Schema({
    header: String,
    detail: String,
    source: String,
    mediatype: String,
    mediasource: String,
    published: Date,
    active: Boolean
});

module.exports = mongoose.model('NewsItem', NewsItemSchema);
