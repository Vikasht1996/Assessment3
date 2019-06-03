
var day = new Date();
var hrs=day.getHours();

if(hrs >= 0 && hrs<11)
{
  document.write("<b>Good Morning</b>");
}
else if(hrs>=12 && hrs<17)
{
  document.write("<b>Good Afternoon</b>");
}
else if(hrs>=17 && hrs<=23)
{
  document.write("<b>Good Evening</b>");
}
else
{
  document.write("<b>Good Night</b>");
}

function displayCalendar()
{
 var htmlContent ="";
 var FebNumberOfDays ="";
 var counter = 1;
 var dateNow = new Date();
 var month = dateNow.getMonth();

 var nextMonth = month+1; 
 var prevMonth = month -1;
 var day = dateNow.getDate();
 var year = dateNow.getFullYear();

 if (month == 1){
  if ( (year%100!=0) && (year%4==0) || (year%400==0)){
    FebNumberOfDays = 29;
  }else{
    FebNumberOfDays = 28;
  }
}

var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]



var nextDate = new Date(nextMonth +' 1 ,'+year);
var weekdays= nextDate.getDay();
var weekdays2 = weekdays
var numOfDays = dayPerMonth[month];

while (weekdays>0){
  htmlContent += "<td class='monthPre'></td>";


  weekdays--;
}


while (counter <= numOfDays){


  if (weekdays2 > 6){
    weekdays2 = 0;
    htmlContent += "</tr><tr>";
  }


  if (counter == day){
    htmlContent +="<td class='dayNow'  onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' "+
    "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'>"+counter+"</td>";
  }else{
    htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"#FF0000\"'"+
    " onMouseOut='this.style.background=\"#FFFFFF\"'>"+counter+"</td>";    

  }

  weekdays2++;
  counter++;
}

var calendarBody = "<table class='calendar'> <tr class='monthNow'><th colspan='7'>"
+monthNames[month]+" "+ year +"</th></tr>";
calendarBody +="<tr class='dayNames'>  <td>S</td>  <td>M</td> <td>T</td>"+
"<td>W</td> <td>T</td> <td>F</td> <td>S</td> </tr>";
calendarBody += "<tr>";
calendarBody += htmlContent;
calendarBody += "</tr></table>";

document.getElementById("calendar").innerHTML=calendarBody;

}

$(document).ready(function(){
  $("#hide2").click(function(){
    $("#hide1").hide();
  });});
$(document).ready(function(){
  $("#hide4").click(function(){
    $("#hide3").hide();
  });});
$(document).ready(function(){
  $("#hide6").click(function(){
    $("#hide5").hide();
  });});
