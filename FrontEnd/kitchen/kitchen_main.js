$(document).ready(function(){


	getOrders();
});

function getOrders()
{
	//console.log("working");
	var active_orders=[];
	$.get('http://localhost:443/api/parties',function(data){
			$.each(data, function(key,party){
				console.log(party.p_Orders);
				//active_orders = party.p_Orders;
				//if table.exists
				$.each(party.orders,function(key,order){
					console.log('test: Stepped into order list');
					if(order.complete==false)
					{
						active_orders.append(JSON.parse(order));
					}
				});
				

			});
	});
	//console.log(active_orders);
	// var i = 0;
	// $.each(active_orders.order, function(key,order)
	// {
	// 	i++;
	// 	console.log(orders);
	// 	let output = '<div class ="card" id="body"';
	// 	output += '<p>'+active_orders[i] +'</p>';
	// 	output += '</div>';
	// 	$('#cardb'+1).html(output);

	// });


}

function clearScreen()
{
	document.getElementById("cardb"+i).innerHTML = "";

}



