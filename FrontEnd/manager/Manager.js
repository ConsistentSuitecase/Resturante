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
	
	var lettus = 0;
	var oyster = 0;
	var samon = 0;
	var octopus = 0;
	var platter = 0;
	var bsalmon = 0;
	var catfish = 0;
	var burger = 0;
	var pasta = 0;
	var crab = 0;
	var chicken = 0;
	var slider = 0;
	var sandwich = 0;
	var shrimp = 0;
	var taco = 0;
	var cmcake = 0;
	var jshot = 0;
	var cccake = 0;
	var rbcake = 0;
	var ccs = 0;
	var coke = 0;
	var tea = 0;
	var water = 0;

	var lettusT = 0;
	var oysterT = 0;
	var samonT = 0;
	var octopusT = 0;
	var platterT = 0;
	var bsalmonT = 0;
	var catfishT = 0;
	var burgerT = 0;
	var pastaT = 0;
	var crabT = 0;
	var chickenT = 0;
	var sliderT = 0;
	var sandwichT = 0;
	var shrimpT = 0;
	var tacoT = 0;
	var cmcakeT = 0;
	var jshotT = 0;
	var cccakeT = 0;	
	var rbcakeT = 0;
	var ccsT = 0;
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
					if(party.p_Orders[i].itemName=="Thai Lettus Wraps")
					{
						lettus++;
						lettusT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Oysters")
					{
						oyster++;
						oysterT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Salmon")
					{
						samon++;
						samonT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Fried octopus")
					{
						octopus++;
						octopusT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="platter")
					{
						platter++;
						platterT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Bourbon Salmon")
					{
						bsalmon++;
						bsalmonT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Fried catfish")
					{
						catfish++;
						catfishT+=party.p_Orders[i].itemPrice;
					}															
					else if(party.p_Orders[i].itemName=="Angus Burger")
					{
						burger++;
						burgerT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="SeaFood pasta")
					{
						pasta++;
						pastaT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="King Crab")
					{
						crab++;
						crabT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Chicken Tendors")
					{
						chicken++;
						chickenT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Sliders")
					{
						slider++;
						sliderT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Grilled Cheese Sandwich")
					{
						sandwich++;
						sandwichT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Mini Fried shrimps")
					{
						shrimp++;
						shrimpT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="SeaFood Tacos")
					{
						taco++;
						tacoT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Chocolate Mouse Cake")
					{
						cmcake++;
						cmcakeT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Famous American Jello Shot")
					{
						jshot++;
						jshotT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Caramel Cheesecake")
					{
						cccake++;
						cccakeT+=party.p_Orders[i].itemPrice;
					}					
					else if(party.p_Orders[i].itemName=="Red and Blue Fruit Icecream  Cake")
					{
						rbcake++;
						rbcakeT+=party.p_Orders[i].itemPrice;
					}
					else if(party.p_Orders[i].itemName=="Caramel Chocolate Sunday")
					{
						ccs++;
						ccsT+=party.p_Orders[i].itemPrice;
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

				document.getElementById("quantity").innerHTML = 
				"Quantity<br>"
				+lettus+"<br>"
				+oyster+"<br>"
				+samon+"<br>"
				+octopus+"<br>"
				+platter+"<br><br>"

				+bsalmon+"<br>"
				+catfish+"<br>"
				+burger+"<br>"
				+pasta+"<br>"
				+crab+"<br><br>"

				+chicken+"<br>"
				+slider+"<br>"
				+sandwich+"<br>"
				+shrimp+"<br>"
				+taco+"<br><br>"

				+cmcake+"<br>"
				+jshot+"<br>"
				+cccake+"<br>"
				+rbcake+"<br>"
				+ccs+"<br><br>"

				+coke+"<br>"
				+tea+"<br>"
				+water+"<br><br><p align='right'>Total:</p>";

				document.getElementById("moneh").innerHTML = 
				"Food Total<br>$"
				+lettusT.toFixed(2)+"<br>$"
				+oysterT.toFixed(2)+"<br>$"
				+samonT.toFixed(2)+"<br>$"
				+octopusT.toFixed(2)+"<br>$"
				+platterT.toFixed(2)+"<br><br>$"

				+bsalmonT.toFixed(2)+"<br>$"
				+catfishT.toFixed(2)+"<br>$"
				+burgerT.toFixed(2)+"<br>$"
				+pastaT.toFixed(2)+"<br>$"
				+crabT.toFixed(2)+"<br><br>$"

				+chickenT.toFixed(2)+"<br>$"
				+sliderT.toFixed(2)+"<br>$"
				+sandwichT.toFixed(2)+"<br>$"
				+shrimpT.toFixed(2)+"<br>$"
				+tacoT.toFixed(2)+"<br><br>$"

				+cmcakeT.toFixed(2)+"<br>$"
				+jshotT.toFixed(2)+"<br>$"
				+cccakeT.toFixed(2)+"<br>$"
				+rbcakeT.toFixed(2)+"<br>$"
				+ccsT.toFixed(2)+"<br><br>$"	

				+cokeT.toFixed(2)+"<br>$"
				+teaT.toFixed(2)+"<br>$"
				+waterT.toFixed(2)+"<br><br>$"+totalCost.toFixed(2)+"<br>";
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
var reset = "61159PM";
var cmp;
var apm = "AM";

if(hour > 12)
{
	hour -= 12;
	apm="PM";
}
if(minute < 10)
	minute="0"+minute;
else if(hour == 00)
{
	hour = 12;
	apm="AM";
}
	cmp=d.getDay() +""+hour +""+ minute + apm;

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
    if(reset == cmp)
         document.getElementById("DateHTML").innerHTML += " Reset Data";

} 
	//output+='<p id="list">'+party.p_Orders[i].itemName+'   $'+party.p_Orders[i].itemPrice+'</p>';
