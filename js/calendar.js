
initCalender();  
getTourData();

var calendar; 

function initCalender() {
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar'); 
    calendar = new FullCalendar.Calendar(calendarEl, {
 
      firstDay: 1,
      events: []
   
    });
  
    calendar.render();
  });


}


function getTourData(){

  var tourTitle = document.getElementById('fticketTheme').value;
  var tourDate =  document.getElementById('fdate').value;
  var date = new Date(tourDate + 'T00:00:00');
  var maxP = document.getElementById('fmaxParticipants').value; 

  calendar.addEvent({  
    
    title: tourTitle,
    start: date,
    participants: maxP,
  
  });
  
}




  
  // var obj = {
  //   title: tourTitle,
  //   start: date

  // }; 

  // tours.push(obj); 

 