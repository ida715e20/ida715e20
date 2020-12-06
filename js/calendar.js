
var calendar, tours = [{

  title: "Test1", 
  start: '2020-12-12', 
  description: "Hej med dig .. blablabla"
 },

  {

    title: "Test 2", 
    start: '2020-12-21',
    description: "Blablalbalba"

  }]

initCalender();


function initCalender() {
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar'); 
    calendar = new FullCalendar.Calendar(calendarEl, {
 
      firstDay: 1,
      events: tours,      
   
      eventClick: function(event,){
      
          $('#eventModal').modal('show'); 
          $('.modal-title').html(event.event.title); 
          $('.modal-body').html(event.event.start); 

      }

    });
    
    calendar.render();

    // retrieving data //
    tourtext = localStorage.getItem("tourJSON");
    tourJSON = JSON.parse(tourtext);

    console.log(tourJSON);
    

  });
}

