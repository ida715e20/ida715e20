 

var witchCalendar, middleagesCalendar, occupationCalendar,
tour1 = [{ 
  id: "821",
  title: "Aalborg in the middleages",
  start: "2020-12-06T11:30:00",
  color: 'green',
  tickets: 30, 
},

{ 
  id: "999",
  title: "Aalborg in the middleages",
  start: "2020-12-24T19:30:00",
  color: 'green',
  tickets: 30,

}]
; 


tour1Calendar();
tour2Calendar(); 
tour3Calendar();


function tour1Calendar() 
{
  document.addEventListener('DOMContentLoaded', function() 
  {
    var calendarEl = document.getElementById('middleagesCalendar'); 
    middleagesCalendar = new FullCalendar.Calendar(calendarEl, 
    { 
      
      firstDay: 1,  
      events: tour1,  
      
      // eventclick: function(event,){
      //   $('#details').html(event.tour1[1]);
      //   console.log(event.tour1[1]);

      // }
          
    });

    middleagesCalendar.render();
  });

}



function getTourdata(){



}





function tour2Calendar() 
{
  document.addEventListener('DOMContentLoaded', function() 
  {
    var calendarEl = document.getElementById('witchCalendar'); 
    witchCalendar = new FullCalendar.Calendar(calendarEl, 
    { 
      
      firstDay: 1,  
      events: [ {

        id: "821",
        title: "witchs, ghosts and blood dripping stories",
        start: "2020-12-30T11:30:00",
        color: 'green'

      },
      {

        id: "999",
        title: "witches, ghosts and blood dripping stories",
        start: "2020-12-01T19:30:00",
        color: 'green' 

      }
      ] ,    
          
    });

    witchCalendar.render();
  });

}


function tour3Calendar() 
{
  document.addEventListener('DOMContentLoaded', function() 
  {
    var calendarEl = document.getElementById('occupationCalendar'); 
    occupationCalendar = new FullCalendar.Calendar(calendarEl, 
    { 
      
      firstDay: 1,  
      events: [{

        id: "821",
        title: "Aalborg during the occupation",
        start: "2020-12-30T11:30:00",
        color: 'green'

      },
      {

        id: "999",
        title: "Aalborg during the occupation",
        start: "2020-12-01T19:30:00",
        color: 'green'

      }
      ] ,    
          
    });

    occupationCalendar.render();
  });

}


