$(document).ready(function(){


	getOrders();
});

function getOrders()
{
	var active_orders=[];
	$.get('http://localhost:443/api/parties',function(data){
		$.each(data, function(key,party){
			//console.log(party);
			//$.each(party.p_Orders, function(key,party){
							//console.log(orders.itemName);

					let output = '<div';

				for(var i=0;i<party.p_Orders.length;i++)
				{
					console.log(i);
					output+='<p> '+party.p_Orders[i].itemName+' </p>';
				}

					output += '</div>';
					console.log(party.p_Table);
					$('#'+party.p_Table).html(output);
			//});
		
			//setTimeout(getOrders, 100000);

});

	});

	//console.log(party.p_Orders);




}

function clearScreen_1()
{
	document.getElementById("1001").innerHTML = "";

}

function clearScreen_2()
{
	document.getElementById("1002").innerHTML = "";

}

function clearScreen_3()
{
	document.getElementById("1003").innerHTML = "";

}

function clearScreen_4()
{
	document.getElementById("1004").innerHTML = "";

}

function clearScreen_5()
{
	document.getElementById("1005").innerHTML = "";

}

function clearScreen_6()
{
	document.getElementById("1006").innerHTML = "";

}

function clearScreen_7()
{
	document.getElementById("1007").innerHTML = "";

}

function clearScreen_8()
{
	document.getElementById("1008").innerHTML = "";

}

function clearScreen_9()
{
	document.getElementById("1009").innerHTML = "";

}

function clearScreen_10()
{
	document.getElementById("1010").innerHTML = "";

}


function clearScreen_11()
{
	document.getElementById("1011").innerHTML = "";

}

function clearScreen_12()
{
	document.getElementById("1012").innerHTML = "";

}

function clearScreen_13()
{
	document.getElementById("1013").innerHTML = "";

}

function clearScreen_14()
{
	document.getElementById("1014").innerHTML = "";

}

function clearScreen_15()
{
	document.getElementById("1015").innerHTML = "";

}

function clearScreen_16()
{
	document.getElementById("1016").innerHTML = "";

}



