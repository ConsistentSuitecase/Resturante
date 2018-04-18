function check(){
	$.get('http://localhost:443/api/parties',function(data){
		console.log(data);
		$.each(data, function(key,party)
		{
			var j= party.p_Table-1000;
			
			if(party.p_WaiterID == 1000)
			{
				if(party.p_hasOrdered)
					document.getElementById("Table"+j).style.backgroundColor = "red";			
				else if(party.p_NeedsRefill)
					document.getElementById("Table"+j).style.backgroundColor = "orange";
				else if(party.p_HasPaid)
					document.getElementById("Table"+j).style.backgroundColor = "white";
				else if(party.p_isSeated)
					document.getElementById("Table"+j).style.backgroundColor = "green";	
			}

			else if(party.p_WaiterID == 1001)
			{
				if(party.p_hasOrdered)
					document.getElementById("Table"+j).style.backgroundColor = "red";			
				else if(party.p_NeedsRefill)	
					document.getElementById("Table"+j).style.backgroundColor = "orange";
				else if(party.p_HasPaid)
					document.getElementById("Table"+j).style.backgroundColor = "white";
				else if(party.p_isSeated)
					document.getElementById("Table"+j).style.backgroundColor = "green";									
			}

			else if(party.p_WaiterID == 1002)
			{
				if(party.p_hasOrdered)
					document.getElementById("Table"+j).style.backgroundColor = "red";			
				else if(party.p_NeedsRefill)	
					document.getElementById("Table"+j).style.backgroundColor = "orange";
				else if(party.p_HasPaid)
					document.getElementById("Table"+j).style.backgroundColor = "white";
				else if(party.p_isSeated)
					document.getElementById("Table"+j).style.backgroundColor = "green";									
			}

			else if(party.p_WaiterID == 1003)
			{
				if(party.p_hasOrdered)
					document.getElementById("Table"+j).style.backgroundColor = "red";			
				else if(party.p_NeedsRefill)
					document.getElementById("Table"+j).style.backgroundColor = "orange";
				else if(party.p_HasPaid)
					document.getElementById("Table"+j).style.backgroundColor = "white";
				else if(party.p_isSeated)
					document.getElementById("Table"+j).style.backgroundColor = "green";									
			}
		});
	}); 
	setTimeout(check,5000);
}
