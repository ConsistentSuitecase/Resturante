function check(){
	$.get('http://localhost:443/api/parties',function(data){
		console.log(data);
		var i = 0;
		var j;
		$.each(data, function(key,party)
		{
			if(party.p_WaiterID == 1000)
			{				
				for(j=1;j<5;j++)
				{ 
					if(party.NeedsHelp == true)
						document.getElementById("Table"+j).style.backgroundColor = "red";			
					else if(party.NeedsRefill == true)	
						document.getElementById("Table"+j).style.backgroundColor = "orange";
					else if(party.p_isSeated == true)
						document.getElementById("Table"+j).style.backgroundColor = "green";
					else
						document.getElementById("Table"+j).style.backgroundColor = "white";
				}
			}
			else if(party.p_WaiterID == 1001)
			{				
				for(j=5;j<9;j++)
				{ 
					//grab waiter_ID, and grab tables from there, so possibly ()
					if(party.NeedsHelp == true)
						document.getElementById("Table"+j).style.backgroundColor = "red";			
					else if(party.NeedsRefill == true)	
						document.getElementById("Table"+j).style.backgroundColor = "orange";
					else if(party.p_isSeated == true)
						document.getElementById("Table"+j).style.backgroundColor = "green";
					else
						document.getElementById("Table"+j).style.backgroundColor = "white";
				}
			}
			else if(party.p_WaiterID == 1002)
			{				
				for(j=9;j<13;j++)
				{ 
					//grab waiter_ID, and grab tables from there, so possibly ()
					if(party.NeedsHelp == true)
						document.getElementById("Table"+j).style.backgroundColor = "red";			
					else if(party.NeedsRefill == true)	
						document.getElementById("Table"+j).style.backgroundColor = "orange";
					else if(party.p_isSeated == true)
						document.getElementById("Table"+j).style.backgroundColor = "green";
					else
						document.getElementById("Table"+j).style.backgroundColor = "white";
				}
					
			}
			else if(party.p_WaiterID == 1003)
			{				
				for(j=13;j<17;j++)
				{ 
					//grab waiter_ID, and grab tables from there, so possibly ()
					if(party.NeedsHelp == true)
						document.getElementById("Table"+j).style.backgroundColor = "red";			
					else if(party.NeedsRefill == true)	
						document.getElementById("Table"+j).style.backgroundColor = "orange";
					else if(party.p_isSeated == true)
						document.getElementById("Table"+j).style.backgroundColor = "green";
					else
						document.getElementById("Table"+j).style.backgroundColor = "white";
				}
					
			}
		});
	}); 
	setTimeout(check,5000);
}
