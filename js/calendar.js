
var calendar; 

initCalender();

function initCalender() 
{
  document.addEventListener('DOMContentLoaded', function() 
  {
    var calendarEl = document.getElementById('calendar'); 
    calendar = new FullCalendar.Calendar(calendarEl, 
    {
 
      
      firstDay: 1,
      events: []
    
    });
    
    calendar.render();

    // retrieving data //
    tourtext = localStorage.getItem("tourJSON");
    tourJSON = JSON.parse(tourtext);
    

  });
}

function getTourData(){

  var tourTitle = document.getElementById('fticketTheme').value;
  var tourDate =  document.getElementById('fdate').value;
  var date = new Date(tourDate + 'T00:00:00');
  var maxP = document.getElementById('fmaxParticipants').value; 


  // Storing data:
  tour = {title: tourTitle, date: tourDate, start: date, participants: maxP};
  tourJSON = JSON.stringify(tour);
  localStorage.setItem("tourJSON", tourJSON);

  calendar.addEvent({  
    
    title: tourJSON.title,
    date: tourJSON.date,
    start: tourJSON.start,
    participants: tourJSON.participants,

  });
}




  /*
   var obj = {
     title: tourTitle,
     start: date

   }; 

  tours.push(obj); */

 