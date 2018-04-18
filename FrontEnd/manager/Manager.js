function check(){
	$.get('http://localhost:443/api/parties',function(data){
		console.log(data);
		$.each(data, function(key,party)
		{
			var j= party.p_Table-1000;
			var table=0;

			for(j = 1001; j < 1016; j++)
				{
					table = j-1000;
					if(j == party.p_Table)
					{
						if(party.p_hasOrdered)
							document.getElementById("Table"+table).style.backgroundColor = "red";			
						else if(party.p_NeedsRefill)
							document.getElementById("Table"+table).style.backgroundColor = "orange";
						else if(party.p_HasPaid)
							document.getElementById("Table"+table).style.backgroundColor = "white";
						else if(party.p_isSeated)
							document.getElementById("Table"+table).style.backgroundColor = "green";	
					}
				}
		});
	}); 
	setTimeout(check,5000);
}
