$(document).ready(function(){



});

function getOrders()
{
	var active_orders=[];
	$.get('http://localhost:443/api/parties',function(data){
			$.each(data, function(key,party){

				//if table.exists
				$.each(party.orders,function(key,order)){
					console.log('test: Stepped into order list');
					if(order.Complete==false)
					{
						active_orders.append(order);
					}
				}

			});
	});
}

function getName3(){
	//$.get('http://johnknowlesportfolio.com:443/api/parties',function(data){
		$.get('http://localhost:443/api/parties',function(data){
		console.log(data);
		//for(i=1;i<5;i++){
		var i=party.order_ItemCount;
		$.each(data, function(key,party){
			//i++;
			while(i > 0){
			
			var DishID = party.getDishName;

			let output2= '<div class="card-body1" id="body2">';
			output2 += '<p> DishID';
			output2 += '</p>'
			output2 += '</div>'
			$('#card-body'+i).html(output);
			console.log(output2);
			i--;
			}
			//output += party.p_Name + '<span class = "party_name"></span>';
			//output += '<div class="pull-right"> <a class="btn btn-success btn-view-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">View</a> <a class="btn btn-primary btn-edit-task" data-task-name="'+print.p_Name+'" data-task-id="'+print._id+'">Edit</a> <a class="btn btn-danger btn-delete-task" data-task-id="'+print._id+'">Delete</a></div>';
		});

	//}
	}); 
}