$(document).ready(function(){
	test();
	$('#btn_placeOrder').click(getActiveTable);
	//$('#kidschicken').click(kidsChick);
});
var totalOrderCount = 0;

function test(e){
	console.log('test function');
	var test=sessionStorage.getItem('orders');
	if(test==null)
	{
		console.log('starting order obj');
		var orders={orders:[
			]};
			sessionStorage.setItem('orders',JSON.stringify(orders));
		}
	}

	var url="http://localhost:443"
//get active table
function getActiveTable(e){
	//probably dynamically assign this number later
	//add some more shit about active table conditions in here later
	var tableNumber=1001;
	console.log('fuck it we will do it live');
	$.get(url+'/api/parties',function(data){
		console.log(data);
		$.each(data, function(key,party){

			if(party.p_Table==tableNumber){
				console.log(party);
				var table_id=party._id;
				//append orders to the ticket
				console.log('event fired');

    			//Grab orders from the cart
    			var orders=JSON.parse(sessionStorage.getItem('orders'));
				//append existing orders to the ticket here
				
				//append orders already on the ticket
				$.each(party.p_Orders,function(key,order){
					orders['orders'].push(order);
				});

				//log that shit to the database
				console.log(orders);
				console.log(table_id);
				console.log('putting');
				$.ajax({
					url: url+'/api/party/logOrders/'+table_id,
					data: JSON.stringify({
						"p_Orders":orders
					}),
					type:'PUT',
					contentType:'application/json',
					success: function(data){
				//window.location.href='main.html';
			},
			error:function(xhr ,status, err){
				console.log(err);
			}
		});
				console.log(orders);

			}
		});
	});
}

//log attempts here
function addOrders(table_id){

}


function addLecuce(){
	//store a lettuce object in session storage
}

function getOrders(){

}

function addChicken(){
	//pull from table
	AddOrderToSession('chicken','tendies',1,'reeee');
}
function AddOrderToSession( name,  desc,  price,  comment) {
	console.log('kids chick');
	var orders=JSON.parse(sessionStorage.getItem('orders'));
	console.log(orders);
	var temp={
		itemName:name,
		itemDesc:desc,
		itemPrice:price,
		comments:comment
	};
	console.log(temp);
	orders['orders'].push(temp);
	sessionStorage.setItem('orders',JSON.stringify(orders));
	console.log(sessionStorage.getItem('orders'));
}

/*
   function kidsChick() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.itemName="Chicken Strips";
            sessionStorage.Description="Mini fried chicken strips on popsicle sticks";
            sessionStorage.price="$6.00";
            sessionStorage.comments="";

        }
    }
    console.log(sessionStorage.itemName);
    console.log(sessionStorage.Description);
    console.log(sessionStorage.price);
    console.log(sessionStorage.comments);
   }*/