$(document).ready(function(){
	test();
	$('#btn_placeOrder').click(getActiveTable);
});

function test(e){
	console.log('test');
}

var url="http://localhost:443"
//get active table
function getActiveTable(e){
	//probably dynamically assign this number later
	//add some more shit about active table conditions in here later
	var tableNumber=1001;
	console.log('fuck it we will do it live');
	$.get(url+'/api/parties',function(data){
		console.log(data);
		$.each(data, function(key,party){

			if(party.p_Table==tableNumber){
				console.log(party);
				addOrders(party._id);
			}
		});
	});
}

//log attempts here
	function addOrders(table_id){
		console.log('event fired');
		var orders=[];
		var orderCount=1;
		for(var i=0; i<orderCount; i++){
			var temp ={
				Name : "Sweet Tea",
				Description : "lol",
				price : 1
			};
			orders.push(temp);
		}
		console.log(orders);
		console.log(table_id);
		console.log('putting');
		$.ajax({
			url: url+'/api/party/logOrders/'+table_id,
			data: JSON.stringify({
				"p_Orders":orders
			}),
			type:'PUT',
			contentType:'application/json',
			success: function(data){
				//window.location.href='main.html';
			},
			error:function(xhr ,status, err){
				console.log(err);
			}
		});
		console.log(orders);
	}