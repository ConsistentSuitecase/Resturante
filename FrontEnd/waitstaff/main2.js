$(document).ready(function(){
	
	$('#testtest').click(ahhh);
	$('#test1').click(ahhh2);
	$('#test_button').click(function(){
		getName();
	});
});


function test(e){
	console.log('this is a function!');
}


//var url='http://www.johnknowlesportfolio.com:443';
var url='http://localhost:443';
function getName1(){
	//$.get('http://johnknowlesportfolio.com:443/api/parties',function(data){
		$.get('http://localhost:443/api/parties',function(data){
		console.log(data);
		//for(i=1;i<5;i++){
		var i=0;
		$.each(data, function(key,party){
			//i++;
			if(party.p_WaiterID == 1000){
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
			}
			//output += party.p_Name + '<span class = "party_name"></span>';
			//output += '<div class="pull-right"> <a class="btn btn-success btn-view-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">View</a> <a class="btn btn-primary btn-edit-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">Edit</a> <a class="btn btn-danger btn-delete-task" data-task-id="'+print._id+'">Delete</a></div>';
		});

	//}
	}); 
}
function getName2(){
	//$.get('http://johnknowlesportfolio.com:443/api/parties',function(data){
		$.get('http://localhost:443/api/parties',function(data){
		console.log(data);
		//for(i=1;i<5;i++){
		var i=0;
		$.each(data, function(key,party){
			//i++;
			if(party.p_WaiterID == 1001){
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
			}
			//output += party.p_Name + '<span class = "party_name"></span>';
			//output += '<div class="pull-right"> <a class="btn btn-success btn-view-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">View</a> <a class="btn btn-primary btn-edit-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">Edit</a> <a class="btn btn-danger btn-delete-task" data-task-id="'+print._id+'">Delete</a></div>';
		});

	//}
	}); 
}
function getName3(){
	//$.get('http://johnknowlesportfolio.com:443/api/parties',function(data){
		$.get('http://localhost:443/api/parties',function(data){
		console.log(data);
		//for(i=1;i<5;i++){
		var i=0;
		$.each(data, function(key,party){
			//i++;
			if(party.p_WaiterID == 1002){
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
			}
			//output += party.p_Name + '<span class = "party_name"></span>';
			//output += '<div class="pull-right"> <a class="btn btn-success btn-view-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">View</a> <a class="btn btn-primary btn-edit-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">Edit</a> <a class="btn btn-danger btn-delete-task" data-task-id="'+print._id+'">Delete</a></div>';
		});

	//}
	}); 
}
function getName4(){
	//$.get('http://johnknowlesportfolio.com:443/api/parties',function(data){
		$.get('http://localhost:443/api/parties',function(data){
		console.log(data);
		//for(i=1;i<5;i++){
		var i=0;
		$.each(data, function(key,party){
			//i++;
			if(party.p_WaiterID == 1003){
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
			}
			//output += party.p_Name + '<span class = "party_name"></span>';
			//output += '<div class="pull-right"> <a class="btn btn-success btn-view-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">View</a> <a class="btn btn-primary btn-edit-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">Edit</a> <a class="btn btn-danger btn-delete-task" data-task-id="'+print._id+'">Delete</a></div>';
		});

	//}
	}); 
}
function getHelp(){
	console.log('getting');
	$.get('http://localhost:443/api/parties',function(data){
		console.log(data);
		//for(i=1;i<5;i++){
		var i=0,k=0,j=0,m=0,i2=0,k2=0,j2=0,m2=0;
		//var k=0;
		$.each(data, function(key,party){
			// if(party.NeedsHelp == true)
			// {
			// 	let output = '<button type="button" id="test_button" style = "background-color:red">Help</button>'
			// }
			console.log(party.p_NeedsRefill);
			
			if(party.p_WaiterID == 1000 && party.p_NeedsRefill == true){
					i++;
					let output = '<button id="testtest" type="button" style="background-color:red">refill</button>';
					$('#btn_1000_'+i+'_refill').html(output);
					console.log(output);
			}
			else if(party.p_WaiterID == 1001){
				if(party.p_NeedsRefill == true){
					k++;
					let output = '<button id="testtest" type="button" style="background-color:red">refill</button>';
					$('#btn_1001_'+k+'_refill').html(output);
					console.log(output);
				}

			}
			else if(party.p_WaiterID == 1002){
				if(party.p_NeedsRefill == true){
					j++;
					let output = '<button id="testtest" type="button" style="background-color:red">refill</button>';
					$('#btn_1002_'+j+'_refill').html(output);
					console.log(output);
				}
			}
			else if(party.p_WaiterID == 1003){
				if(party.p_NeedsRefill == true){
					m++;
					let output = '<button id="testtest" type="button" style="background-color:red">refill</button>';
					$('#btn_1003_'+m+'_refill').html(output);
					console.log(output);
				}
			}

			if(party.p_WaiterID == 1000 && party.p_needHelp == true){
					i2++;
					let output = '<button id="test1" type="button" style="background-color:red">help</button>';
					$('#btn_1000_'+i2+'_help').html(output);
					console.log(output);
			}
			else if(party.p_WaiterID == 1001){
				if(party.p_needHelp == true){
					k2++;
					let output = '<button id="test1" type="button" style="background-color:red">help</button>';
					$('#btn_1001_'+k2+'_help').html(output);
					console.log(output);
				}

			}
			else if(party.p_WaiterID == 1002){
				if(party.p_needHelp == true){
					j2++;
					let output = '<button id="test1" type="button" style="background-color:red">help</button>';
					$('#btn_1002_'+j2+'_help').html(output);
					console.log(output);
				}
			}
			else if(party.p_WaiterID == 1003){
				if(party.p_needHelp == true){
					m2++;
					let output = '<button id="test1" type="button" style="background-color:red">help</button>';
					$('#btn_1003_'+m2+'_help').html(output);
					console.log(output);
				}
			}
		});
	}); 
	setTimeout(getHelp,5000);
}
function ahhh(){
	//alert('is this working?');
	var tableNumber = 1001;
	$.get(url+'/api/parties',function(data){
		
			$.each(data, function(key,party){
				//var table_id = party.p_
			var id = party._id;
				//if(party.p_Table==tableNumber){
				console.log('updating refill2');
				$.ajax({
					url:url+'/api/parties/updateDrink/'+id,
					data: JSON.stringify({
						"p_NeedsRefill":false
					}),
					type:'PUT',
					contentType:'application/json',
					success: function(data){
						//window.location.href='host.html';
						location.reload();
					},
					error:function(xhr ,status, err){
						console.log(err);
					}
				});
			//}
			
		});
		});
}
function ahhh2(){
	///alert('is this working?');
	var tableNumber = 1001;
	$.get(url+'/api/parties',function(data){
		
			$.each(data, function(key,party){
				//var table_id = party.p_
			var id = party._id;
				//if(party.p_Table==tableNumber){
				console.log('updating help2');
				$.ajax({
					url:url+'/api/parties/updateHelpStatus2/'+id,
					data: JSON.stringify({
						"p_needHelp":false
					}),
					type:'PUT',
					contentType:'application/json',
					success: function(data){
						//window.location.href='host.html';
						location.reload();
					},
					error:function(xhr ,status, err){
						console.log(err);
					}
				});
			//}
			
		});
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