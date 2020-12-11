var calendar, choseneventid;

let maxEvents = 30;

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

        $('#eventModal').modal('show');
        choseneventid = event.event.id; 
        //chosenevent får eventets id der clickes på
        console.log(choseneventid);
       
        $('#guideInfo').html(event.event.extendedProps.description);
        $('#guidePart').html(event.event.extendedProps.participants);
        $('#guidePlace').html(event.event.extendedProps.place);
        /*$('#guideAccept').html(event.event.extendedProps.guide);*/
        $('#assGuide').modal('show');
      
    }
         

    });

    calendar.render();
    console.log(console.log(calendar.getEvents())); 
    

    for (let i = 0; i < maxEvents; i++)
    {
      let eventname = "tourinfo" + i.toString();

      if (localStorage.getItem(eventname) != null)
      {
        tourtext = localStorage.getItem(eventname); 
        tourLS = JSON.parse(tourtext);
  
        calendar.addEvent({  
  
          id: tourLS.id,
          title: tourLS.title,
          date: tourLS.date,
          start: tourLS.start,
          participants: tourLS.participants,
          description: tourLS.description,
          duration: tourLS.duration,
          place: tourLS.place,
          tickets: tourLS.tickets
  
        });
      }
    }
  
  });
}


function getTourData(){

  // så længe størrelsen på vores lager < 30
  if (localStorage.length < maxEvents)
  {
    var tourTitle = document.getElementById('fticketTheme').value;
    var tourDate =  document.getElementById('fdate').value;
    var time = new Date(tourDate + 'T00:00:00');
    var maxP = document.getElementById('fmaxParticipants').value;
    var tourDuration = document.getElementById('fduration').value;
    var tourPlace = document.getElementById('fplace').value;
    var tourDescription = document.getElementById('fDescription').value;
    var ticketTypes = document.getElementById('fticketTypes').value;
    var uniqueID = getRandomInt(maxEvents)
    // kører indtil eventet får et unikt id
    while (localStorage.getItem("tourinfo" + uniqueID.toString()) != null)
    {
      uniqueID = getRandomInt(maxEvents)
    }
  
    // Storing data:
    tour = {title: tourTitle, date: tourDate, start: time, participants: maxP, duration: tourDuration, place: tourPlace, id: uniqueID, description: tourDescription, tickets: ticketTypes}; /*, guide: tourGuide};*/
  
    tourLS = JSON.stringify(tour);
  
    localStorage.setItem("tourinfo" + uniqueID.toString(), tourLS);
          
    calendar.addEvent({  
      
      id: uniqueID, 
      title: tourTitle,
      date: tourDate,
      start: time,
      participants: maxP,
      duration: tourDuration,
      place: tourPlace,
      description: tourDescription,
      tickets: ticketTypes 
      
    });
    // hvis vi opretter et event får vi denne besked
    document.getElementById("eventText").innerHTML = "You have succesfully created a new event!"
  }
  // hvis vi ikke kan oprette et event fordi vi har nået max antal, får vi denne besked
  else
  {
    document.getElementById("eventText").innerHTML = "You have reached the limit for new events!"
  }

}

function removeEvent() {
  //makes event invisible
  calendar.getEventById(choseneventid).remove();
  // remove from local storage
  console.log("removing event with id " + choseneventid);
  localStorage.removeItem("tourinfo" + choseneventid);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setStatus(color) {
  calendar.getEventById(choseneventid).setProp("color", color);
}

