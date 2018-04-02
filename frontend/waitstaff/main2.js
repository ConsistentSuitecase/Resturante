$(document).ready(function(){
	

	$('#test_button').click(function(){
		test();
	});
});


function test(e){
	console.log('this is a function!');
}


var url='http://www.johnknowlesportfolio.com:3000';
function getName(){
	$.get('http://johnknowlesportfolio.com:3000/api/parties',function(data){
		console.log(data);
		let output= '<div class="card">'//<ul class= "list-group">';
		$.each(data, function(key,party){
			console.log(data);
			output += '<div id="name_put" class="card-body">' + party.p_Name + '</div>';//<li class="list-group-item">';
			//output += party.p_Name + '<span class = "party_name"></span>';
			//output += '<div class="pull-right"> <a class="btn btn-success btn-view-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">View</a> <a class="btn btn-primary btn-edit-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">Edit</a> <a class="btn btn-danger btn-delete-task" data-task-id="'+print._id+'">Delete</a></div>';
		});
		output+='</div>';
		$('#parties').html(output);
	}); 
}
//Get data from a server
function getParties(){
	$.get(url+'/api/parties',function(data){
		$.each(data, function(key,print){
			console.log(data);
		});
	});
}