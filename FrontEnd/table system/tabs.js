

function openMenu(evt, foodType) {
	"use strict";
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(foodType).style.display = "block";
    evt.currentTarget.className += " active";
	
}
function openOrder(evt, contentType) {
	"use strict";
    // Declare all variables
    var i, ordercontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
   	ordercontent = document.getElementsByClassName("ordercontent");
    for (i = 0; i < ordercontent.length; i++) {
        ordercontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(contentType).style.display = "block";
    evt.currentTarget.className += " active";
	
}
