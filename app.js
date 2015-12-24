var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require ("mongoose");
var mongodburi = process.env.mongodburi;

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

mongoose.connect(mongodburi, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + mongodburi + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + mongodburi);
  }
});

/*
var sample_schema = new mongoose.Schema({
	header: String
});

var Sample = mongoose.model('Sample',sample_schema);
*/

var NewsItem = require('./models/newsitem.js');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  console.log('Request recieved!');
  response.render('pages/home');
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

app.get('/user/:username',function(req,res){
	console.log('request recieved at /user');
	res.send('Welcome to this app by Gourab ' + req.params.username);
});

app.get('/admin',function(req,res){
	res.render('pages/admin');
});

app.post('/news',function(req,res){
	console.log('Post request received!');
	var news = new NewsItem();
	news.title = req.body.title;
	news.detail = req.body.detail;
	news.question = req.body.question;
	news.save(function(err){
		if(err)
			res.json({status:false});
	});
	res.json({
		status:	true,
		data: news
	});
});

app.put('/news',function(req,res){
	console.log('Put request received!');
	var news = NewsItem.findById(req.body._id, function(err,item){
		if(err){
			res.json({status: false});
		}
		else{
			item.title = req.body.title;
			item.detail = req.body.detail;
			item.question = req.body.question;
			item.save(function(err){
				if(err)
					res.json({status: false});
				res.json({
					status: true,
					data: item
				});
			});
		}
	});
});

app.get('/news',function(req,res){
	console.log('Get request recieved!');
	NewsItem.find({},function(err,items){
			  if(err) {
				console.log("Error query to mongo " + err);
				res.json([]);
	  }
	  else {
		  console.log("Success query mongo");
		  res.json(items);
	  }
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
