$(document).ready(function(){

	//alert(1);
	//getPrints();
	$('#add_party').on('click','.submitButton',function()
	{
		addParty();
	});
	$('body').on('click','.btn-search-by-ID',getPartiesByID);
		$('body').on('click','.btn_getAll',getParties);



	
	$(".dropdown-menu").on('click', 'li a', function(){
		$(this).parent().parent().siblings(".btn:first-child").html($(this).text()+' <span class="caret"></span>');
		$(this).parent().parent().siblings(".btn:first-child").val($(this).text());
	});
});

//get all parties
function getParties(){
	$.get('http://johnknowlesportfolio.com:3000/api/parties',function(data){
		console.log(data);
		let output= '<ul class= "list-group">';
		$.each(data, function(key,party){
			console.log(data);
			output += '<li class="list-group-item">';
			output += party.p_Name + '<span class = "party_name"></span>';
			output += '<div class="pull-right"> <a class="btn btn-success btn-view-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">View</a> <a class="btn btn-primary btn-edit-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">Edit</a> <a class="btn btn-danger btn-delete-task" data-task-id="'+print._id+'">Delete</a></div>';
		});
		output+='</ul>';
		$('#parties').html(output);
	});
}

function getPartiesByID(){
	var w_ID=$('#w_ID').val();
	$.get('http://johnknowlesportfolio.com:3000/api/parties/findByID/'+w_ID,function(data){
		let output= '<ul class= "list-group">';
		$.each(data, function(key,party){
			console.log(data);
			output += '<li class="list-group-item">';
			output += party.p_Name + '<span class = "party_name"></span>';
			output += '<div class="pull-right"> <a class="btn btn-success btn-view-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">View</a> <a class="btn btn-primary btn-edit-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">Edit</a> <a class="btn btn-danger btn-delete-task" data-task-id="'+print._id+'">Delete</a></div>';
		});
		output+='</ul>';
		$('#parties').html(output);
	});
}


//New beautiful function
function addParty()
{
	//e.preventDefault();
	//window.alert('submitting');

	var p_Name=$('#p_Name').val();
	var p_Count=$('#p_Count').val();
	var p_WaiterID=0;
	console.log('posting');
	$.ajax({
		url: 'http://johnknowlesportfolio.com:3000/api/parties',
		data: JSON.stringify({
			"p_Name": p_Name,
			"p_Count": p_Count,
			"p_WaiterID": p_WaiterID
		}),
		type:'POST',
		contentType:'application/json',
		success: function(data){
			window.location.href='index.html';
		},
		error:function(xhr ,status, err){
			console.log(err);
		}
	});
}


