var express = require('express');
var app = express();
var mongoose = require ("mongoose");
var mongodburi = process.env.mongodburi;

mongoose.connect(mongodburi, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + mongodburi + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + mongodburi);
  }
});

var sample_schema = new mongoose.Schema({
	header: String
});

var Sample = mongoose.model('Sample',sample_schema);


app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  console.log('Request recieved!');
  response.send('Welcome to this app ' + request.body.name);
/*
  var header = new Sample({
  	header: 'Header created on ' + Date.now()
  });
  
  header.save(function(err){
  	if(err)
  		console.log('Error saving header');
  });

  Sample.find({},function(err,samples){
	  if(err) {
		  console.log("Error query to mongo " + err);
		  response.send("Error quering mongo");
	  }
	  else {
		  console.log("Success query mongo " + samples);
		  response.json(samples);
	  }	
  });
  */
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
