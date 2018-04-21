$(document).ready(function(){


	getOrders();
});
var url='http://localhost:444';
function getOrders()
{
	var active_orders=[];
	$.get(url+ '/api/parties',function(data){
		$.each(data, function(key,party){

				console.log(party);
			if(party.p_isComplete == false)
			{
				let output = '<div';

				for(var i=0;i<party.p_Orders.length;i++)
				{
					console.log(i);
					output+='<p>'+party.p_Orders[i].itemName+ '</p>';
				}

				output += '</div>';
				console.log(party.p_Table);
				$('#'+party.p_Table).html(output);
			}

		});

	});
}

function markTableAsComplete(tableNumber){

	console.log('stepped in');

	$.get(url +'/api/parties', function(data){
		$.each(data, function(key,party){

			if(party.p_Table==tableNumber && party.p_isComplete==false)
			{
				var table_id=party._id;
				console.log(table_id);
				$.ajax({
					url:url+'/api/parties/updateIsComplete/'+table_id,
					data: JSON.stringify({
						"p_isComplete":true
					}),
					type:'PUT',
					contentType:'application/json',
					success: function(data){
					//window.location.href='host.html';
				},
				error:function(xhr ,status, err){
					console.log(err);
				}
			});
			}
		});
	});



}

function clearScreen_1()
{

	var tableNumber = 1001;


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

/*
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
*/


