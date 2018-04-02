var express = require('express');
var bodyParser= require('body-parser');
var mongojs = require("mongojs");
var db= mongojs('parties', ['parties']);


port = process.env.PORT || 443;



var app= express();
var cors=require('cors');

app.use(cors({origin: '*'}));
app.use(bodyParser.json());

app.use(bodyParser.json());



app.get('/', function(req, res, next){
	console.log('Hiiii');

	res.send('Hello World');

});

//Get all Items
app.get('/api/parties', function(req, res, next){
	//res.send('List active print jobs');
	db.parties.find( function(err, docs){
		if(err)
		{
			res.send(err);
		}
		console.log(docs);
		res.json(docs);

	});

});

//Fetch Single Item
app.get('/api/parties/:id', function(req, res, next){
	//res.send('Get one item'+req.params.id);
	db.parties.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, doc){
		if(err)
		{
			res.send(err);
		}
		console.log('product found!');
		res.json(doc);

	});

});

//fetch an item by p_Name
app.get('/api/parties/findByName/:p_Name', function(req, res, next){
	//res.send('Get one item'+req.params.id);
	console.log(req.params.p_Name);
	db.parties.find({p_Name: ''+req.params.p_Name}, function(err, docs){
		if(err)
		{
			res.send(err);
		}
		console.log('print found!');
		res.json(docs);

	});

});
//Fetch an item by student ID
app.get('/api/parties/findByID/:p_WaiterID', function(req, res, next){
	//console.log('Get one item '+req.params.w_ID);
	console.log('id being searched for ' + req.params.p_WaiterID);
	db.parties.find({ p_WaiterID: req.params.p_WaiterID}, function(err, docs){
		if(err)
		{
			res.send(err);
		}
		console.log('Party found!');
		console.log(docs);
		res.json(docs);
	});

});





//Submit data to API
app.post('/api/parties', function(req, res, next){
	//res.send('Add Item');
	db.parties.insert(req.body, function(err, doc){
	if(err)
	{
		res.send(err);
	}
	console.log(doc);
	console.log('Adding partie');
	res.json(doc);
	});
});


//Delete an item
app.delete('/api/parties/:id', function(req, res, next){
	//res.send('Delete: '+req.params.id);
	db.parties.remove({_id: mongojs.ObjectId(req.params.id)},function(err,doc){
		if(err)
		{
			res.send(err);
		}
		console.log('Removing Party');
		res.json(doc);
	});
});

//Enable cross domain resource utility, essentially making a public API. weeee
app.use(function(req, res, next) {
	console.log('test');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



//Weird shit to make a public API work
app.listen(port,'0.0.0.0', function(){
	console.log("new Server started on port "+ port);
});
