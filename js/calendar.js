

var calendar; 

initCalender();

function initCalender() 
{
  document.addEventListener('DOMContentLoaded', function() 
  {
    var calendarEl = document.getElementById('calendar'); 
    calendar = new FullCalendar.Calendar(calendarEl, 
    { 
      
/*
      firstDay: 1,  
      events: []*/
      eventClick: function(event, jsEvent, view) {
        alert("in event click");
        $('#modalTitle').html(calEvent.title);
        $('#modalBody').html(calEvent.title);
        $('#calendarModal').modal();

    }
          
    });
    
    
    calendar.render();
    

    // retrieving data //
    for (let i = 1; i < localStorage.length + 1; i++)
    {
      tourtext = localStorage.getItem("tourJSON" + i.toString()); //håber der står tourjSON1, tourJSON2 osv
      tourJSON = JSON.parse(tourtext);

      calendar.addEvent({  
        
        title: tourJSON.title,
        date: tourJSON.date,
        start: tourJSON.start,
        participants: tourJSON.participants,
        duration: tourJSON.duration,
        place: tourJSON.place
      });
    }
  });
}

function getTourData(){

  var tourTitle = document.getElementById('fticketTheme').value;
  var tourDate =  document.getElementById('fdate').value;
  var time = new Date(tourDate + 'T00:00:00');
  var maxP = document.getElementById('fmaxParticipants').value;
  var tourDuration = document.getElementById('fduration').value;
  var tourPlace = document.getElementById('fplace').value;

  // Storing data:
  tour = {title: tourTitle, date: tourDate, start: time, participants: maxP, duration: tourDuration, place: tourPlace};
  tourJSON = JSON.stringify(tour);

  let numberevents = localStorage.length + 1;
  
  localStorage.setItem("tourJSON" + numberevents.toString(), tourJSON);
        


  calendar.addEvent({  
    
    title: tourTitle,
    date: tourDate,
    start: time,
    participants: maxP,
    duration: tourDuration,
    place: tourPlace
  });
/*
  console.log(calendar.getEventById("noget"))
*/
}




  /*
   var obj = {
     title: tourTitle,
     start: date

   }; 

  tours.push(obj); */

 