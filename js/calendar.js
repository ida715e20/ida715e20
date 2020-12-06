


var calendar, tours=[{

  "allDay": "true",
  "title": "Test event",
  "id": "821",
  "start": "2020-12-06"
}]; 

initCalender();

function initCalender() {
  console.log("hej");
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar'); 
    calendar = new FullCalendar.Calendar(calendarEl, {
 
      firstDay: 1,
      events: tours,
   
    });

 
  }
    calendar.render();

   
}

  
  




function getTourData(){

  var tourTitle = document.getElementById('fticketTheme').value;
  var tourDate =  document.getElementById('fdate').value;
  var date = new Date(tourDate + 'T00:00:00');
  var maxP = document.getElementById('fmaxParticipants').value; 
 
  // var t = {title: tourTitle, date: tourDate, start: date, participants: maxP};
  // tours.push(t); 

    var eventObject = {
    title: tourTitle,
    start: tourDate,
 
    };


}




 