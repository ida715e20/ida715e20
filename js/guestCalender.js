 

var middleagesCalendar,
tour1 = [{ 
  id: "821",
  title: "Aalborg in the Middleages",
  start: "2020-12-06T11:30:00",
  color: 'green',
  participants: 30, 
  place: "Aalborg Historiske Museum",
},

{ 
  id: "999",
  title: "Aalborg in the Middleages",
  start: "2020-12-24T19:30:00",
  backgroundColor: 'green',
  participants: 30,
  place: "Algade 19 at The Museum of the Graybrothers convent"

}]
; 


tour1Calendar();



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







