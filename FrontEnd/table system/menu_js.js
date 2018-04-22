$(document).ready(function(){
	test();
	displayCart();
	$('#btn_placeOrder').click(sendOrders);
	$('#btn_DisplayOrdered').click(displayOrderedFood);
	$('#btn_buyShirt').click(buyShirt);
	$('#btn_AddCoupon').click(activateCoupon);
	$('#deals').click(deal);
	$('#refill').click(refill);
	$('#help2').click(help);
	$('#btn_Coke').click(addCoke);
	$('#btn_Tea').click(addTea);
	$('#btn_Water').click(addWater);
	$('#SplitCount').on('change', splitCheck);
	$('#btn_GenRecipt').on('click',genRecipt);
	//$('#kidschicken').click(kidsChick);
});
var totalOrderCount = 0;
var totalOrder = 0;
var url="http://localhost:443";
function refill(){
	var tableNumber = 1001;
	$.get(url+'/api/parties',function(data){
			$.each(data, function(key,party){
				//var table_id = party.p_

				if(party.p_Table==tableNumber){
				console.log('updating refill');
				$.ajax({
					url:url+'/api/parties/updateDrinkStatus/'+party._id,
					data: JSON.stringify({
						"p_NeedsRefill":true
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
function help(){
	var tableNumber = 1001;
	console.log('is it working?');
	$.get(url+'/api/parties',function(data){
			$.each(data, function(key,party){
				//var table_id = party.p_

				if(party.p_Table==tableNumber){
				console.log('updating help');
				$.ajax({
					url:url+'/api/parties/updateHelpStatus/'+party._id,
					data: JSON.stringify({
						"p_needHelp":true
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
function deal(){
	window.confirm("do you want add drink and dessert for $3.50");
	if(confirm)
	{
		AddOrderToSession('special dessert', 'choco cake', 3.50, '' );
		AddOrderToSession('special drink', 'drink', 0, '' );
	}
	else
	{

	}

}
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
					
					if(order.itemType=='Entrees' && prev==false){
						//send this to the api somehow
						console.log('Found an entree')
						prev=true;
					}
					else if(order.itemType=='Entrees' && prev==true){
						prev=false;
						order.itemPrice=0;
						console.log('found two entrees')
					}
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


	var day=new Date();
	console.log(day.getDay());
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
	


function splitCheck(){
		console.log('splitting');
		var count=$('#SplitCount').val();
		console.log(count);
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
				totalCost=totalCost/count;
				output+='<li> Total Owed Per Payment: '+totalCost+'</li>';
				output+='</ul>';
				output+='<button  onclick="openPay(event, \'recipt\')"> Pay </button>';
				$('#checks').html(output);
				console.log(output);
				sessionStorage.setItem('splitCount',count);
				sessionStorage.setItem('price',totalCost);
			}
			
		});

	});

}

function genRecipt(){
	console.log('test');
	var tableNumber=1001;
		$.get(url+'/api/parties',function(data){
		$.each(data, function(key,party){

			if(party.p_Table==tableNumber){
				//redner the food
				var splitCount=sessionStorage.getItem('splitCount');
				var totalCost=sessionStorage.getItem('price');
				console.log(totalCost);
				console.log(splitCount);

				if(totalCost==null)
				{
					totalCost=0;
				}

				let output='<ul>';

				$.each(party.p_Orders,function(key,order){					
					output+='<li>'+order.itemName+'   $'+order.itemPrice+'</li>';
					totalCost+=order.itemPrice;
				});
				output+='<li> Total Owed: '+totalCost+'</li>';
				output+='</ul>';
				
				var splitOut='';
				if(splitCount!=null)
				{

					var i=0;
					while(i<splitCount)
					{
						splitOut+=output;
						i++;
					}
					$('#recipts').html(splitOut);
					return;


				}


				$('#recipts').html(output);

				return;
			}
			
		});

	});
}

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
				console.log(party);
				if(party.p_Table==tableNumber){
				//redner the food
				
				var totalCost=0;
				let output='<ul>'
				console.log(party.p_Orders);
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
				orders=checkDate(orders);

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


//make kids food free
function checkDate(orders){
	
	//get the day of the week
	var a=new Date();
	var day=a.getDay();
	$.each(orders,function(key,order){
		console.log(order);
		//if its sunday
		if(day==0 && order.itemType=='kids')
		{
			alert('food should be free');
			order.itemPrice=0;
		}
	});
	return orders;
}
function totalOrderCount() {
	totalOrder++;
	console.log(totalOrder);
}
//Appatizers
function addThaiLettuceWraps(){
	AddOrderToSession('Thai Lettus Wraps', 'Wild Hog Wrapped in Bibb Lettuce, Pineapple & Cherry Tomato, Red Onion & Peanut Sauce, Puffed Rice', 12.00, '' , 'Appatizers');
}

function addCoke(){
	AddOrderToSession('coke', 'like santa', 1.50, '' ,'drink');
}

function addTea(){
	AddOrderToSession('tea', 'SONG O THE SOUTH', 1.50, '' , 'drink');
}

function addWater(){
	AddOrderToSession('water', 'sweet and real', 11.50, '', 'drink');
}


function addOysters() {
	AddOrderToSession('Oysters', 'Seasoned Oyster with Lemon', 12.00, '', 'Appatizers');
}

function addSalmon(){
	AddOrderToSession('Salmon', 'Raw Salmon with Lemon and Slices of Onion', '$12.00' , 'Appatizers');
}

function addFriedOctopus() {
	AddOrderToSession('Fried Octopus', 'Octopus that is breaded and fried to a nice golden brown', 12.00, '', 'Appatizers');	
}

function addPlatter() {
	AddOrderToSession('Platter', 'Fried shrimp, Octopus, and onion rings', 12.00, '', 'Appatizers');
}
//Entrees
function addBourbonSalmon() {
	AddOrderToSession('Bourbon Salmon', 'Atlantic Salmon Filet Char Grilled, Bourbon Barbeque Sauce, Asparagus, Quinoa Rice', 28.00, '', 'Entrees');	
}

function addFriedCatfish(){
	AddOrderToSession('Fried Catfish', 'Fried Catfish served with Fries, Tartar Sauce, and Salad', 28.00, '', 'Entrees');
}

function addAngusBurger() {
	AddOrderToSession('Angus Burger', 'Grilled Angus Beef with Onions, Lettuce, Tomatoes, and Pickles, served with Fries', 28.00, '', 'Entrees');
}

function addSeaFoodPasta() {
	AddOrderToSession('SeaFood Pasta', 'Seasoned Pasta with Fried Shrimps with Lemon and Parmesean', 28.00, '', 'Entrees');
}

function addKingCrab() {
	AddOrderToSession('King Crab','Huge Boiled King Crab with sauce', 28.00,'', 'Entrees');
}
//Kids Menu
function addChicken(){
	//pull from table
	AddOrderToSession('Chicken Tendors','"Three chicken tendors"',10.00,'', 'kids');
}

function addSliders() {
	AddOrderToSession('Sliders', 'Three Sliders', 11.00, '', 'kids');
}

function addGrilledCheese() {
	AddOrderToSession('Grilled Cheese Sandwich', 'Four Grilled Cheese Sandwich served with Apple Slices', 10.00, '', 'kids');
}

function addMiniFriedShrimp() {
	AddOrderToSession('Mini Fried Shrimps', 'Fried Shrimps with Brocoli and a Biscuit', 11.00, '', 'kids');
}

function addSeaFoodTacos() {
	AddOrderToSession('SeaFood Tacos', 'Two Tacos with Shrimps and Fruits', 10.00, '', 'kids');
}
//Desserts
function addChocolateMouseCake() {
	AddOrderToSession('Chocolate Mouse Cake', 'Creamy Chocolate Cake', 10.00, '', 'desserts');
}

function addFamousAmericanJelloShot() {
	AddOrderToSession('Famous American Jello Shot', 'Red, White, and Blue Jello with a shot of Whip Cream', 10.00, '', 'desserts');
}

function addCaramelCheesecake() {
	AddOrderToSession('Caramel Cheesecake', 'Drizzled Caramel with Whipped Cream and Hazzle Nut Toppings', 10.00, '', 'desserts');
}

function addRedandBlueFruitIcecreamCake() {
	AddOrderToSession('Red and Blue Fruit Icecream Cake', 'Raseberry and Blueberry Icecream Cake', 10.00, '', 'desserts');
}

function addCaramelChocolateSunday() {
	AddOrderToSession('Caramel Chocolate Sunday', 'Cold Icecream Sprinkle with Nuts', 10.00, '', 'desserts');
	totalOrderCount();
}
//document.getElementById("total").innerHTML = 10;

function printOrder() {
	document.getElementById("everything").innerHTML = sessionStorage.getItem("itemName");
}



function AddOrderToSession( name,  desc,  price,  comment, type) {
	console.log('kids chick');
	var orders=JSON.parse(sessionStorage.getItem('orders'));
	console.log(orders);
	var temp={
		itemName:name,
		itemDesc:desc,
		itemPrice:price,
		comments:comment,
		itemType:type,
		complete:false
	};
	console.log(temp);
	orders['orders'].push(temp);
	sessionStorage.setItem('orders',JSON.stringify(orders));
	console.log(sessionStorage.getItem('orders'));
}
var hasplayed = localStorage.setItem('hasplayed', false);
var played = localStorage.setItem('played', false);

function raffle(){
var rand = getRandomInt(1,100);
var played = localStorage.getItem('played');
var hasplayed = localStorage.getItem('hasplayed');
	console.log(played);
	console.log(hasplayed);
	if(played == hasplayed){
		if(rand < 21){
			console.log("you won");
			alert("Congratuations you won!\nShow this to the wait staff for your coupon!");
			localStorage.setItem('hasplayed', true);
		}
		else{
			console.log("you lost");
			alert("Sorry you lost:'( \nBtter luck next time!");
			localStorage.setItem('hasplayed', true);
		}
			console.log(hasplayed);
			console.log(rand);
		}

	else{
		alert("Sorry, only one chance peer table")
	}
}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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