
initCalender();  
getTourData();

var calendar; 

function initCalender() {
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',

      
    });
  
    calendar.render();
  });
}

function getTourData(){

  var tourTitle = document.getElementById('formTitle').value;
  var tourDate =  document.getElementById('fdate').value;

  document.getElementById('fd').value = tourTitle + " " + tourDate;

  var tdate = new Date(tourDate + 'T00:00:00' );

    var date = new Date(tourDate + 'T00:00:00'); // will be in local time

    // valid?
      calendar.addEvent({
        title: tourTitle,
        start: date,
        allDay: true
      });
      
  
  }


