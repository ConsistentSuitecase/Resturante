$(document).ready(function(){
	test();
	displayCart();
	$('#btn_placeOrder').click(sendOrders);
	$('#btn_DisplayOrdered').click(displayOrderedFood);
	$('#btn_buyShirt').click(buyShirt);
	$('#btn_AddCoupon').click(activateCoupon);

	//$('#kidschicken').click(kidsChick);
});
var totalOrderCount = 0;
var totalOrder = 0;

//My Edit
function printlist()
{
	console.log('printList');
	var tableNumber=1001;
	$.get(url+'/api/parties',function(data){
		$.each(data, function(key,party){

			if(party.p_Table==tableNumber){
				//redner the food
				
				var totalCost=0;
				let output='<ul>';

				$.each(party.p_Orders,function(key,order){					
					output+='<li>'+order.itemName+'   $'+order.itemPrice+'</li>';
					totalCost+=order.itemPrice;
				});

				output+='<li> Total Price of all ordered items: '+totalCost+'</li>';
				output+='</ul>';
				$('#check').html(output);
				return;
			}
			
		});
	});
}

function activateCoupon(){

	var coupon=$('#couponName').val();
	if(coupon=='bogo'){
		//get the table
		var tableNumber=1001;
		$.get(url+'/api/parties',function(data){
			$.each(data, function(key,party){

				if(party.p_Table==tableNumber){
				//redner the food
				
				var prev=false;
				$.each(party.p_Orders,function(key,order){					
					
					if(prev==true){
						//send this to the api somehow
						order.itemPrice=0;
					}
					//if order.itemType=='entree'
					prev=true;
				});
				//weee
				console.log('updating order');
				$.ajax({
					url: url+'/api/party/logOrders/'+party._id,
					data: JSON.stringify({
						"p_Orders":party.p_Orders
					}),
					type:'PUT',
					contentType:'application/json',
					success: function(data){
						//clear the local storage
						console.log('it worked i guess')
					},
					error:function(xhr ,status, err){
						console.log(err);
					}
				});
			}
			
		});
		});


	}
}


function getActiveTableID(tableNumber){
	console.log(tableNumber);
	

}
function test(e){
	console.log('test function');
	var test=sessionStorage.getItem('orders');

	// this.tablenumber here
	var tableNumber=1001;
	$.get(url+'/api/parties',function(data){
		$.each(data, function(key,party){
			if(party.p_Table==tableNumber){
				//	console.log(party);
				$('#table_name').html('<h3 class="tableName">'+party.p_Name+'</h3>');
				
			}
		});
	});

	
	if(test==null)
	{
		console.log('starting order obj');
		var orders={orders:[
			]};
			sessionStorage.setItem('orders',JSON.stringify(orders));
		}
	}
	



	var url="http://localhost:443"



	function displayCart(e){
		var cart_orders=JSON.parse(sessionStorage.getItem('orders'));
		var totalCost=0;
		let output='<ul>'
		for(var i=0;i<cart_orders.orders.length;i++)
		{
			console.log(i);
			console.log(cart_orders.orders[i]);
			output+='<li>'+cart_orders.orders[i].itemName+'   $'+cart_orders.orders[i].itemPrice+'</li>';
			totalCost+=cart_orders.orders[i].itemPrice;
		}
		output+='<li> Total Price of cart: '+totalCost+'</li>';
		output+='</ul>'
		$('#cart').html(output);
	}

	function displayOrderedFood(e){
		
		var tableNumber=1001;
		$.get(url+'/api/parties',function(data){
			$.each(data, function(key,party){

				if(party.p_Table==tableNumber){
				//redner the food
				
				var totalCost=0;
				let output='<ul>'

				for(var i=0;i<party.p_Orders.length;i++)
				{
					console.log(i);
					output+='<li>'+party.p_Orders[i].itemName+'   $'+party.p_Orders[i].itemPrice+'</li>';
					totalCost+=party.p_Orders[i].itemPrice;
				}
				output+='<li> Total Price of all ordered items: '+totalCost+'</li>';
				output+='</ul>'
				$('#sentOrders').html(output);
				return;
			}
		});
		});
	}


	function buyShirt(e){
		//alert('buying shirt');
		var tableNumber = 1001;
		$.get(url+'/api/parties',function(data){
			$.each(data, function(key,party){
				if(party.p_Table == tableNumber){
					var totalCost=10;
					console.log(party.p_hasOrdered);
					console.log(true);
					if(party.p_hasOrdered == true)
					{
						console.log('yayyy');
						//totalCost = .25;
						AddOrderToSession('T-Shirt', 'beautiful, Professional shirt', .25, '' );

					}
					else if(party.p_hasOrdered == false)
					{
						console.log('ahhhh');
						AddOrderToSession('T-Shirt', 'beautiful, Professional shirt', 10, '' );
					}
			
			//}
				}
			});
		});
		//AddOrderToSession('T-Shirt', 'beautiful, Professional shirt', .25, '' );

	}
//get active table
function sendOrders(e){
	//probably dynamically assign this number later
	//add some more shit about active table conditions in here later
	var tableNumber=1001;

	//Get all parties
	$.get(url+'/api/parties',function(data){
		//console.log(data);

		//for each party that has our table numer
		$.each(data, function(key,party){
			if(party.p_Table==tableNumber){

				var table_id=party._id;
				
				//append orders to the ticket
				console.log('event fired');

    			//Grab orders from the cart
    			var cart_orders=JSON.parse(sessionStorage.getItem('orders'));

    			console.log(cart_orders);
    			var orders=[];

    			for(var i=0;i<cart_orders.orders.length;i++)
    			{
    				console.log(i);
    				orders.push(cart_orders.orders[i]);
    			}
				//append orders already on the ticket
				if(party.p_Orders!='none'){
					$.each(party.p_Orders,function(key,order){
						orders.push(order);
					});
				}

				//log that shit to the database
				console.log(orders);
				//console.log(table_id);
				console.log('putting');
				$.ajax({
					url: url+'/api/party/logOrders/'+table_id,
					data: JSON.stringify({
						"p_Orders":orders
					}),
					type:'PUT',
					contentType:'application/json',
					success: function(data){
						//clear the local storage
						sessionStorage.clear();
						window.location.href='main.html';
					},
					error:function(xhr ,status, err){
						console.log(err);
					}
				});
				$.ajax({
					url:url+'/api/parties/updateHasOrdered/'+table_id,
					data: JSON.stringify({
						"p_hasOrdered":true
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

//log attempts here
function addOrders(table_id){

}


function addLecuce(){
	//store a lettuce object in session storage
}

function getOrders(){

}

function totalOrderCount() {
	totalOrder++;
	console.log(totalOrder);
}
//Appatizers
function addThaiLettuceWraps(){
	AddOrderToSession('Thai Lettus Wraps', 'Wild Hog Wrapped in Bibb Lettuce, Pineapple & Cherry Tomato, Red Onion & Peanut Sauce, Puffed Rice', 12.00, '' );
}

function addOysters() {
	AddOrderToSession('Oysters', 'Seasoned Oyster with Lemon', 12.00, '');
}

function addSalmon(){
	AddOrderToSession('Salmon', 'Raw Salmon with Lemon and Slices of Onion', '$12.00' );
}

function addFriedOctopus() {
	AddOrderToSession('Fried Octopus', 'Octopus that is breaded and fried to a nice golden brown', 12.00, '');	
}

function addPlatter() {
	AddOrderToSession('Platter', 'Fried shrimp, Octopus, and onion rings', 12.00, '');
}
//Entrees
function addBourbonSalmon() {
	AddOrderToSession('Bourbon Salmon', 'Atlantic Salmon Filet Char Grilled, Bourbon Barbeque Sauce, Asparagus, Quinoa Rice', 28.00, '');	
}

function addFriedCatfish(){
	AddOrderToSession('Fried Catfish', 'Fried Catfish served with Fries, Tartar Sauce, and Salad', 28.00, '');
}

function addAngusBurger() {
	AddOrderToSession('Angus Burger', 'Grilled Angus Beef with Onions, Lettuce, Tomatoes, and Pickles, served with Fries', 28.00, '');
}

function addSeaFoodPasta() {
	AddOrderToSession('SeaFood Pasta', 'Seasoned Pasta with Fried Shrimps with Lemon and Parmesean', 28.00, '');
}

function addKingCrab() {
	AddOrderToSession('King Crab','Huge Boiled King Crab with sauce', 28.00,'');
}
//Kids Menu
function addChicken(){
	//pull from table
	AddOrderToSession('Chicken Tendors','"Three chicken tendors"',10.00,'');
}

function addSliders() {
	AddOrderToSession('Sliders', 'Three Sliders', 11.00, '');
}

function addGrilledCheese() {
	AddOrderToSession('Grilled Cheese Sandwich', 'Four Grilled Cheese Sandwich served with Apple Slices', 10.00, '');
}

function addMiniFriedShrimp() {
	AddOrderToSession('Mini Fried Shrimps', 'Fried Shrimps with Brocoli and a Biscuit', 11.00, '');
}

function addSeaFoodTacos() {
	AddOrderToSession('SeaFood Tacos', 'Two Tacos with Shrimps and Fruits', 10.00, '');
}
//Desserts
function addChocolateMouseCake() {
	AddOrderToSession('Chocolate Mouse Cake', 'Creamy Chocolate Cake', 10.00, '');
}

function addFamousAmericanJelloShot() {
	AddOrderToSession('Famous American Jello Shot', 'Red, White, and Blue Jello with a shot of Whip Cream', 10.00, '');
}

function addCaramelCheesecake() {
	AddOrderToSession('Caramel Cheesecake', 'Drizzled Caramel with Whipped Cream and Hazzle Nut Toppings', 10.00, '');
}

function addRedandBlueFruitIcecreamCake() {
	AddOrderToSession('Red and Blue Fruit Icecream Cake', 'Raseberry and Blueberry Icecream Cake', 10.00, '');
}

function addCaramelChocolateSunday() {
	AddOrderToSession('Caramel Chocolate Sunday', 'Cold Icecream Sprinkle with Nuts', 10.00, '');
	totalOrderCount();
}
//document.getElementById("total").innerHTML = 10;

function printOrder() {
	document.getElementById("everything").innerHTML = sessionStorage.getItem("itemName");
}



function AddOrderToSession( name,  desc,  price,  comment) {
	console.log('kids chick');
	var orders=JSON.parse(sessionStorage.getItem('orders'));
	console.log(orders);
	var temp={
		itemName:name,
		itemDesc:desc,
		itemPrice:price,
		comments:comment,
		complete:false
	};
	console.log(temp);
	orders['orders'].push(temp);
	sessionStorage.setItem('orders',JSON.stringify(orders));
	console.log(sessionStorage.getItem('orders'));
}


function myFunction() {
    alert("Hello! I am an alert box!");
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