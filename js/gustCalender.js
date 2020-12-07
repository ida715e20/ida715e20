 

var witchCalendar, witch = [];


initCalender();


function initCalender() 
{
  document.addEventListener('DOMContentLoaded', function() 
  {
    var calendarEl = document.getElementById('witchCalendar'); 
    witchCalendar = new FullCalendar.Calendar(calendarEl, 
    { 
      

      firstDay: 1,  
      events: ,
     
    
          
    });

    witchCalendar.render();
    

  
  });
}


function getWitchtour(){

}

