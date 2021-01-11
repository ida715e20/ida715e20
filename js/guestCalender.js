 

var witchCalendar, middleagesCalendar, occupationCalendar,
tour1 = [{ 
  id: "821",
  title: "Aalborg in the Middleages",
  start: "2021-01-06T11:30:00",
  color: 'green',
  participants: 30, 
  place: "Aalborg Historiske Museum",
},

{ 
  id: "999",
  title: "Aalborg in the Middleages",
  start: "2021-01-24T19:30:00",
  color: 'green',
  participants: 30,
  place: "Algade 19 at The Museum of the Graybrothers convent"

},

{
  id: "778",
  title: "Witches, ghosts and blood dripping stories",
  start: "2021-01-27T19:30:00",
  color: 'red',
  participants: 0,
  place: "Aalborg Historiske Museum",

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
      
      eventClick: function(event,){
       
        $('#detailsTitle').html(event.event.title); 
        $('#ticketsLeft').html(event.event.extendedProps.participants);
        datek = event.event.start; 
        detw = datek.toDateString(); 
        datt = datek.getHours() + ":" + datek.getMinutes(); 

        $('#detailsTime').html(datt + " " + detw);
        $('#detailsPlace').html(event.event.extendedProps.place); 


        if(event.event.extendedProps.participants == 0){
          event.event.setProp('color', "red"); 
        }
      }
          
    });

    middleagesCalendar.render();
  });

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
        title: "witches, ghosts and blood dripping stories",
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


