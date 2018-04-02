/*$(function(){
    $.get('waitstaff', function(result){
        var obj = $(result).find('script');
        var page1X = $(result).find('div.myData').data('x');
        var page1Y = $(result).find('div.myData').data('y');
    });
});

window.setInterval(function wsname(ws, stat){
 document.getElementById(ws).style.color = "red";//dynamic name
 //dynamic color/status
 document.getElementById(stat).style.backgroundColor = "red";
}, 5000);*/
function check(ws, stat){
	//need to take in variables check if ws matches with any ws#
	//if so, look for stat# and insert status
	//receive, work with 
 document.getElementById("ws1").style.color = "red";//dynamic name
 //dynamic color/status
 document.getElementById("stat1a").style.backgroundColor = "red";
}