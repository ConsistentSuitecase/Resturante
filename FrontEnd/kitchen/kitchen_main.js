$(document).ready(function(){



});

function getOrders()
{
	var active_orders=[];
	$.get('http://localhost:443/api/parties',function(data){
			$.each(data, function(key,party){

				//if table.exists
				$.each(party.orders,function(key,order){
					console.log('test: Stepped into order list');
					if(order.Complete==false)
					{
						active_orders.append(order);
					}
				});

			});
	});


	var i = 1;
	$.each(active_orders.order, function(key,order)
	{
		let output = '<div class ="card-body1" id="body"';
		output += '<p> ';
		output += '</p>';
		output += '</div>';
		$('#card-body'+i).html(output);
		i++
	});

	

}



