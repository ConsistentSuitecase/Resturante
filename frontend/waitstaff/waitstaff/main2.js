$(document).ready(function(){
	

	$('#test_button').click(function(){
		test();
	});
});


function test(e){
	console.log('this is a function!');
}


var url='http://www.johnknowlesportfolio.com:3000';

//Get data from a server
function getParties(){
	$.get(url+'/api/parties',function(data){
		$.each(data, function(key,print){
			console.log(data);
		});
	});
}