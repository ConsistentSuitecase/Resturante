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

//Appatizers
function addThaiLettuceWraps(){
	AddOrderToSession('Thai Lettus Wraps', 'Wild Hog Wrapped in Bibb Lettuce, Pineapple & Cherry Tomato, Red Onion & Peanut Sauce, Puffed Rice', 12.00, '' );
}

function addOyster(){
	AddOrderToSession('Salmon', 'Raw Salmon with Lemon and Slices of Onion', '$12.00' );
}

function addSalmon() {
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