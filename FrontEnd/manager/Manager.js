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
						else if(party.p_isSeated)
							document.getElementById("Table"+y).style.backgroundColor = "green";	
						else if(party.p_HasPaid)
							document.getElementById("Table"+y).style.backgroundColor = "white";		
						else
							document.getElementById("Table"+y).style.backgroundColor = "white";													
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
	var coke = 0;
	var tea = 0;
	var water = 0;

	var salmonT = 0;
	var chickenT = 0;
	var lettuceT = 0;
	var cakeT = 0;	
	var cokeT = 0;
	var teaT = 0;
	var waterT = 0;

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
					else if(party.p_Orders[i].itemName=="coke")
					{
						coke++;
						cokeT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="tea")
					{
						tea++;
						teaT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="water")
					{
						water++;
						waterT+=party.p_Orders[i].itemPrice;
					}										
					totalCost+=party.p_Orders[i].itemPrice;
				}
				document.getElementById("quantity").innerHTML = "Quantity<br>"+salmon+"<br>"+chicken+"<br>"+lettuce+"<br>"+cake+"<br>"+coke+"<br>"+tea+"<br>"+water+"<br><br><br><p align='right'>Total:</p>";
				document.getElementById("moneh").innerHTML = "Food total<br>$"+salmonT.toFixed(2)+"<br>$"+chickenT.toFixed(2)+"<br>$"+lettuceT.toFixed(2)+"<br>$"+cakeT.toFixed(2)+"<br>$"+cokeT.toFixed(2)+"<br>$"+teaT.toFixed(2)+"<br>$"+waterT.toFixed(2)+"<br>";
				document.getElementById("moneh").innerHTML += "<br><br>$"+totalCost.toFixed(2)+"<br>";
//				output+='</ul>'
				//$('#sentOrders').html(output);
				return;
			}
		});
	});
}


function dates() {
var d = new Date();
var minute=d.getMinutes();
var hour=d.getHours();
var month=d.getMonth()+1;

var apm = "AM";

if(hour > 12)
{
	hour -= 12;
	apm="PM";
}
if(minute < 10)
	minute="0"+minute;
else if(hour == 00);
//---------------------------------------------------------------------------------
    switch(d.getDay())
    {
      case 0:
        document.getElementById("DateHTML").innerHTML = "Sunday";
      case 1:
        document.getElementById("DateHTML").innerHTML = "Monday";
      case 2:
        document.getElementById("DateHTML").innerHTML = "Tuesday";
      case 3:
        document.getElementById("DateHTML").innerHTML = "Wednesday";
      case 4:
        document.getElementById("DateHTML").innerHTML = "Thursday";
      case 5:
        document.getElementById("DateHTML").innerHTML = "Friday";
      case 6:
        document.getElementById("DateHTML").innerHTML = "Saturday";
      default:
        break;

    }
//------------switch case is all you need for getting the day----------------------
    document.getElementById("DateHTML").innerHTML += ", "+month+"/"+d.getDate()+" ("+hour+":"+minute+apm+")";

} 
	//output+='<p id="list">'+party.p_Orders[i].itemName+'   $'+party.p_Orders[i].itemPrice+'</p>';
