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
function checkWaiter(){

}
function addParty()
{
	//e.preventDefault();
	//window.alert('submitting');

	var p_Name=$('#p_GroupName').val();
	// if(p_Name == 1000){
	// 	window.location.href = "employee1.html";
	// }
	// else if(p_name == 1001){
	// 	window.location.href = "employee2.html";
	// }
	// else if(p_Name == 1002){
	// 	window.location.href = "employee3.html";
	// }
	// else if(p_Name == 1003){
	// 	window.location.href = "employee4.html";
	// }
	// else{
	// 	window.location.href = "emplyeelogin.html";
	// }
	if(p_Name == "bob"){
		window.location.href = "employee1.html";
	}
	else if(p_Name == "kevin"){
		window.location.href = "employee2.html";
	}
	else if(p_Name == "john"){
		window.location.href = "employee3.html";
	}
	else if(p_Name == "alex"){
		window.location.href = "employee4.html";
	}
	else{
		window.location.href = "emplyee login.html";
	}
	//var p_Count=$('#p_GroupCount').val();
	//var p_Table=$('#p_Table').val();
	// var p_Table=1;
	// var values = [1000,1001,1002,1003];
	// var p_WaiterID=values[Math.floor(Math.random() * values.length)];
	// console.log('posting');
	// $.ajax({
	// 	url: url+'/api/parties',
	// 	data: JSON.stringify({
	// 		"p_Name": p_Name,
	// 		"p_Count": p_Count,
	// 		"p_WaiterID": p_WaiterID,
	// 		"p_Table":p_Table,
	// 		"p_isSeated":true,
	// 		"p_HasPaid":false,
	// 		"p_hasOrdered":false,
	// 		"p_NeedsRefill":false

	// 	}),
	// 	type:'POST',
	// 	contentType:'application/json',
	// 	success: function(data){
	// 		window.location.href='host.html';
	// 	},
	// 	error:function(xhr ,status, err){
	// 		console.log(err);
	// 	}
	// });
}
//Get data from a server
function getParties(){
	$.get(url+'/api/parties',function(data){
		$.each(data, function(key,print){
			console.log(data);
		});
	});
}