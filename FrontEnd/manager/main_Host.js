$(document).ready(function(){
	
	console.log('hello world');
	$('#btn_AddParty').click(function(){
		addParty();
	});
});

//fix this in a minute
var url='http://localhost:443'

function test(e){
	console.log('this is a function!');
}

function addParty()
{
	//e.preventDefault();
	//window.alert('submitting');

	var p_Name=$('#p_GroupName').val();
	var p_Count=$('#p_GroupCount').val();
	//var p_Table=$('#p_Table').val();
	var p_Table=1001;
	var values = [1000,1001,1002,1003];
	var p_WaiterID=values[Math.floor(Math.random() * values.length)];
	console.log('posting');
	$.ajax({
		url: url+'/api/parties',
		data: JSON.stringify({
			"p_Name": p_Name,
			"p_Count": p_Count,
			"p_WaiterID": p_WaiterID,
			"p_Table":p_Table,
			"p_isSeated":true,
			"p_hasOrdered":false,
			"p_NeedsRefill":true,
			"p_Orders":'none',
			"p_HasPaid":false

		}),
		type:'POST',
		contentType:'application/json',
		success: function(data){
			window.location.href='host.html';
		},
		error:function(xhr ,status, err){
			console.log(err);
		}
	});
}

/* Example function
var url='http://www.localhost.com:443';
function getName(){
	$.get(url+'/api/parties',function(data){
		console.log(data);
		//for(i=1;i<5;i++){
		var i=0;
		$.each(data, function(key,party){
			i++;
			let output2= '<p  class="card-text"> people';
			let output= '<p class="card-text"> name';
			output += '<div class="card">';
			output += '<div id="name_put" class="card-body">' + party.p_Name + '</div>';//<li class="list-group-item">';
			output += '</div>'
			output+='</p>';
			output2 += '<li class="list-group-item d-flex justify-content-between align-items-center"> number of people';
			output2 += '<span class="badge badge-primary badge-pill">'+party.p_Count+'</span>'
			output2 += '</li>'
			output2 += '</p>'
			$('#table_'+i).html(output);
			$('#c_'+i).html(output2);
			console.log(output);
			console.log(output2);
			//output += party.p_Name + '<span class = "party_name"></span>';
			//output += '<div class="pull-right"> <a class="btn btn-success btn-view-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">View</a> <a class="btn btn-primary btn-edit-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">Edit</a> <a class="btn btn-danger btn-delete-task" data-task-id="'+print._id+'">Delete</a></div>';
		});
	//}
	}); 
}
*/
//Get data from a server
function getParties(){
	$.get(url+'/api/parties',function(data){
		$.each(data, function(key,print){
			console.log(data);
		});
	});
}