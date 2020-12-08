var calendar, choseneventid, witch ;

initCalender();


function initCalender() 
{
  document.addEventListener('DOMContentLoaded', function() 
  {
    var calendarEl = document.getElementById('calendar'); 
    calendar = new FullCalendar.Calendar(calendarEl, 
    { 
      

      firstDay: 1,  
      events: [],
      
      eventClick: function(event,){

        // admin Modal 
        $('#eventTitle').html(event.event.title); 
        $('#eventInfo').html(event.event.extendedProps.description);
        $('#eventPart').html(event.event.extendedProps.participants);
        $('#eventPlace').html(event.event.extendedProps.place);
        choseneventid = event.event.id; 
        console.log(choseneventid); 
      
        $('#eventModal').modal('show'); 
        $('#guideInfo').html(event.event.extendedProps.description);
        $('#guidePart').html(event.event.extendedProps.participants);
        $('#guidePlace').html(event.event.extendedProps.place);

      $('#assGuide').modal('show');

    },

    
          
    });

    calendar.render();
    console.log(console.log(calendar.getEvents())); 
    

    // retrieving data //
    for (let i = 1; i < localStorage.length + 1; i++)
    {
      tourtext = localStorage.getItem("tourJSON" + i.toString()); //håber der står tourjSON1, tourJSON2 osv
      tourJSON = JSON.parse(tourtext);

      calendar.addEvent({  

        
        id : tourJSON.id,
        title: tourJSON.title,
        date: tourJSON.date,
        start: tourJSON.start,
        participants: tourJSON.participants,
        description: tourJSON.description,
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
  var tourDesc = document.getElementById('fDescrip').value; 
  var uniqueID = getRandomInt(5000);



  // Storing data:
  tour = {title: tourTitle, date: tourDate, start: time, participants: maxP, description: tourDesc, duration: tourDuration, place: tourPlace};
  tourJSON = JSON.stringify(tour);

  let numberevents = localStorage.length + 1;
  
  localStorage.setItem("tourJSON" + numberevents.toString(), tourJSON);
        
  calendar.addEvent({  
    
    id: uniqueID, 
    title: tourTitle,
    date: tourDate,
    start: time,
    participants: maxP,
    description: tourDesc,
    duration: tourDuration,
    place: tourPlace,
  });

}

function removeEvent()
{
  calendar.getEventById(choseneventid).remove();
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setStatus(color){



calendar.getEventById(choseneventid).setProp('color', color);



}






