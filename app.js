var express = require('express');
var app = express();
var mongoose = require ("mongoose");
var mongodburi = process.env.mongodburi;

mongoose.connect(mongodburi, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  console.log('Request recieved!');
  response.send('Welcome to my first app!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
