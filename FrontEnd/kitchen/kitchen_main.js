$(document).ready(function(){


	getOrders();
});

function getOrders()
{
	var active_orders=[];
	$.get('http://localhost:443/api/parties',function(data){
		$.each(data, function(key,party){
			//console.log(party);
			$.each(party.p_Orders.orders,function(key,order){
				console.log(order.itemName);
				if(order.itemName!=undefined)
				{
					let output = '<div class ="card" id="body">';
					output += '<p>'+ order.itemName +'</p>';
					output += '</div>';
					$('#'+party.p_Table).html(output);
				}
			});

		});
	});
}

function clearScreen_1()
{
	document.getElementById("cardb1").innerHTML = "";

}

function clearScreen_2()
{
	document.getElementById("cardb2").innerHTML = "";

}

function clearScreen_3()
{
	document.getElementById("cardb3").innerHTML = "";

}

function clearScreen_4()
{
	document.getElementById("cardb4").innerHTML = "";

}

function clearScreen_5()
{
	document.getElementById("cardb5").innerHTML = "";

}

function clearScreen_6()
{
	document.getElementById("cardb6").innerHTML = "";

}

function clearScreen_7()
{
	document.getElementById("cardb7").innerHTML = "";

}

function clearScreen_8()
{
	document.getElementById("cardb8").innerHTML = "";

}

function clearScreen_9()
{
	document.getElementById("cardb9").innerHTML = "";

}

function clearScreen_10()
{
	document.getElementById("cardb10").innerHTML = "";

}


function clearScreen_11()
{
	document.getElementById("cardb11").innerHTML = "";

}

function clearScreen_12()
{
	document.getElementById("cardb12").innerHTML = "";

}

function clearScreen_13()
{
	document.getElementById("cardb13").innerHTML = "";

}

function clearScreen_14()
{
	document.getElementById("cardb14").innerHTML = "";

}

function clearScreen_15()
{
	document.getElementById("cardb15").innerHTML = "";

}

function clearScreen_16()
{
	document.getElementById("cardb16").innerHTML = "";

}



