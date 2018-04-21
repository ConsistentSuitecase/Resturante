var url="http://localhost:443"

function check(){
	$.get('http://localhost:443/api/parties',function(data){
		console.log(data);
		$.each(data, function(key,party)
		{
			var x;
			var y;

			for(x = 1001; x < 1016; x++)
				{
					y = x-1000;
					if(x == party.p_Table)
					{
						if(party.p_needHelp)
							document.getElementById("Table"+y).style.backgroundColor = "red";			
						else if(party.p_NeedsRefill)
							document.getElementById("Table"+y).style.backgroundColor = "orange";
						else if(party.p_HasPaid)
							document.getElementById("Table"+y).style.backgroundColor = "white";
						else if(party.p_isSeated)
							document.getElementById("Table"+y).style.backgroundColor = "green";	
					}
				}

		});
	}); 
	setTimeout(check,5000);
}

function displayOrderedFood()
{
	var tableNumber=1001;
	var salmon = 0;
	var chicken = 0;
	var lettuce = 0;
	var cake = 0;
	var salmonT = 0;
	var chickenT = 0;
	var lettuceT = 0;
	var cakeT = 0;	
	$.get(url+'/api/parties',function(data)
	{
		$.each(data, function(key,party)
		{

			if(party.p_Table==tableNumber)
			{
				//redner the food
				
				var totalCost=0;

				for(var i=0;i<party.p_Orders.length;i++)
				{
					console.log(data);
					if(party.p_Orders[i].itemName=="Bourbon Salmon")
					{
						salmon++;
						salmonT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Chicken Tendors")
					{
						chicken++;
						chickenT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Lettuce Wrap")
					{
						lettuce++;
						lettuceT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Chocolate Mouse Cake")
					{
						cake++;
						cakeT+=party.p_Orders[i].itemPrice;
					}
					totalCost+=party.p_Orders[i].itemPrice;
				}
				document.getElementById("quantity").innerHTML = "Quantity<br>"+salmon+"<br>"+chicken+"<br>"+lettuce+"<br>"+cake+"<br><br><br><p align='right'>Total:</p>";
				document.getElementById("moneh").innerHTML = "Food total<br>$"+salmonT+".00<br>$"+chickenT+".00<br>$"+lettuceT+".00<br>$"+cakeT+".00<br>";
				document.getElementById("moneh").innerHTML += "<br><br>$"+totalCost+".00<br>";
//				output+='</ul>'
				//$('#sentOrders').html(output);
				return;
			}
		});
	});
}
	//output+='<p id="list">'+party.p_Orders[i].itemName+'   $'+party.p_Orders[i].itemPrice+'</p>';
