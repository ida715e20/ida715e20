
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
    for (let i = 1; i < localStorage.length + 1; i++)
    {
      tourtext = localStorage.getItem("tourJSON" + i.toString()); //håber der står tourjSON1, tourJSON2 osv
      tourJSON = JSON.parse(tourtext);

      calendar.addEvent({  
        
        title: tourJSON.title,
        date: tourJSON.date,
        start: tourJSON.start,
        participants: tourJSON.participants,

      });
    }
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

  let numberevents = localStorage.length + 1;
  
  localStorage.setItem("tourJSON" + numberevents.toString(), tourJSON);
        


  calendar.addEvent({  
    
    title: tourTitle,
    date: tourDate,
    start: date,
    participants: maxP,

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

 