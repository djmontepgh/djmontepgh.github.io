var d = new Date();
var arr_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var arr_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var weekday = arr_weekdays[d.getDay()];
var day = d.getDate();
var month = arr_months[d.getMonth()];
var year = d.getFullYear();

var x = weekday + ", " + day + " " + month + " " + year;
document.getElementById("currentdate").innerHTML = x;
