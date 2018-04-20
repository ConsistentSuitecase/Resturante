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
	//res.send('List active print parties');
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
		console.log('party found!');
		res.json(docs);

	});

});


//Fetch an item by waiter ID
app.get('/api/parties/findByID/:p_WaiterID', function(req, res, next){
	//console.log('Get one item '+req.params.w_ID);
	console.log('id being searched for ' + req.params.p_WaiterID);
	db.parties.find({p_WaiterID: req.params.p_WaiterID}, function(err, docs){
		if(err)
		{
			res.send(err);
		}
		console.log('Party found!');
		console.log(docs);
		res.json(docs);
	});

});


//Fetch an item by table number
app.get('/api/parties/findByTable/:p_Table', function(req, res, next){
	//console.log('Get one item '+req.params.w_ID);
	console.log('Table number being searched for ' + req.params.p_Table);
	var tableNumber=req.params.p_Table;
	db.parties.find({p_Table: tableNumber}, function(err, docs){
		if(err)
		{
			res.send(err);
		}
		console.log(docs);
		res.json(docs);
	});

});
//fetch parties by seated status
app.get('/api/parties/findBySeatedStatus/:p_isSeated', function(req, res, next){
	//res.send('Get one item'+req.params.id);
	var boolean;
	if(req.params.isComplete=='true')
	{
		boolean=true;
	}
	else
	{
		boolean=false;
	}	
	db.parties.find({p_isSeated: ''+req.params.p_isSeated}, function(err, docs){
		if(err)
		{
			res.send(err);
		}
		console.log('party found!');
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


//Update an item
app.put('/api/parties/:id', function(req, res, next){
	//res.send('Update job '+req.params.id);
	db.parties.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},update:{
		$set:{
			//Need to fill in additional feilds
			p_fName: req.body.p_fName,
			p_lName: req.body.p_lName
		}
	},new: true}, function(err,doc){
		if(err)
		{
			res.send(err);
		}
		console.log('item modified');
		res.json(doc);
	})

});


//Update Attempts
app.put('/api/parties/updateDrinkStatus/:id', function(req, res, next){
	//res.send('Update job '+req.params.id);
	db.parties.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},update:{
		$set:{

			p_NeedsRefill:req.body.p_NeedsRefill
		}
	},new: true}, function(err,doc){
		if(err)
		{
			res.send(err);
		}
		console.log('item modified');
		res.json(doc);
	})

});
app.put('/api/parties/updateDrink/:id', function(req, res, next){
	//res.send('Update job '+req.params.id);
	db.parties.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},update:{
		$set:{

			p_NeedsRefill:req.body.p_NeedsRefill
		}
	},new: false}, function(err,doc){
		if(err)
		{
			res.send(err);
		}
		console.log('item modified');
		res.json(doc);
	})

});

//Update Help
app.put('/api/parties/updateHelpStatus/:id', function(req, res, next){
	//res.send('Update job '+req.params.id);
	db.parties.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},update:{
		$set:{

			p_needHelp:req.body.p_needHelp
		}
	},new: true}, function(err,doc){
		if(err)
		{
			res.send(err);
		}
		console.log('item modified');
		res.json(doc);
	})

});
app.put('/api/parties/updateHelpStatus2/:id', function(req, res, next){
	//res.send('Update job '+req.params.id);
	db.parties.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},update:{
		$set:{

			p_needHelp:req.body.p_needHelp
		}
	},new: false}, function(err,doc){
		if(err)
		{
			res.send(err);
		}
		console.log('item modified');
		res.json(doc);
	})

});


//Update isSeated
app.put('/api/parties/updateSeatedStatus/:id', function(req, res, next){
	//res.send('Update job '+req.params.id);
	db.parties.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},update:{
		$set:{

			p_isSeated:req.body.p_isSeated
		}
	},new: true}, function(err,doc){
		if(err)
		{
			res.send(err);
		}
		console.log('item modified');
		res.json(doc);
	})

});

app.put('/api/parties/updateHasOrdered/:id', function(req, res, next){
	//res.send('Update job '+req.params.id);
	db.parties.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},update:{
		$set:{

			p_hasOrdered:req.body.p_hasOrdered
		}
	},new: true}, function(err,doc){
		if(err)
		{
			res.send(err);
		}
		console.log('item modified');
		res.json(doc);
	})

});

app.put('/api/parties/updateIsComplete/:id', function(req, res, next){
	//res.send('Update job '+req.params.id);
	db.parties.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},update:{
		$set:{

			p_isComplete:req.body.p_isComplete
		}
	},new: true}, function(err,doc){
		if(err)
		{
			res.send(err);
		}
		console.log('item modified');
		res.json(doc);
	})

});

//Append items to the data object
app.put('/api/party/logOrders/:id', function(req, res, next){
	//res.send('Update job '+req.params.id);
	console.log('test_log '+req.body.p_Orders);
	db.parties.findAndModify({query: {_id: mongojs.ObjectId(req.params.id)},update:{
		$set:{
			p_Orders: req.body.p_Orders,
		}
	},new: true}, function(err,doc){
		if(err)
		{
			res.send(err);
		}
		console.log('item modified');
		res.json(doc);
	})

});



//Weird shit to make a public API work
app.listen(port,'0.0.0.0', function(){
	console.log("new Server started on port "+ port);
});
