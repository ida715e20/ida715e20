var calendar, choseneventid;

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

        $('#eventTitle').html(event.event.title); 
        $('#eventInfo').html(event.event.extendedProps.description);
        $('#eventPart').html(event.event.extendedProps.participants);
        $('#eventPlace').html(event.event.extendedProps.place);
        $('#eventModal').modal('show');
        choseneventid = event.event.id; 
 /*       
        $('#guideName').html(event.event.extendedProps.guide);
        var g = "hehe"; //document.getElementById('guideAccept').value;

        event.event.setProp('guide', g); 
 */          
       
        $('#guideInfo').html(event.event.extendedProps.description);
        $('#guidePart').html(event.event.extendedProps.participants);
        $('#guidePlace').html(event.event.extendedProps.place);
        /*$('#guideAccept').html(event.event.extendedProps.guide);*/
        $('#assGuide').modal('show');
      
    }
         
    });
    /*
    calendar.on('eventClick', function (info) {
    chosenevent = info.event.id;
    }); 
    */
    calendar.render();
    

    for (let i = 1; i < localStorage.length + 1; i++)
    {
      tourtext = localStorage.getItem("tourJSON" + i.toString()); //håber der står tourjSON1, tourJSON2 osv
      tourJSON = JSON.parse(tourtext);

      calendar.addEvent({  

        id: tourJSON.id,
        title: tourJSON.title,
        date: tourJSON.date,
        start: tourJSON.start,
        participants: tourJSON.participants,
        duration: tourJSON.duration,
        place: tourJSON.place,
        description: tourJSON.description,
        tickets: tourJSON.tickets

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
  var tourDescription = document.getElementById('fDescription').value;
  var ticketTypes = document.getElementById('fticketTypes').value;
  /*var tourGuide = document.getElementById('guideAccepts').value;*/
  var uniqueID = getRandomInt(5000)

  // Storing data:
  tour = {title: tourTitle, date: tourDate, start: time, participants: maxP, duration: tourDuration, place: tourPlace, id: uniqueID, description: tourDescription, tickets: ticketTypes}; /*, guide: tourGuide};*/
  tourJSON = JSON.stringify(tour);

  let numberevents = localStorage.length + 1;
  
  localStorage.setItem("tourJSON" + numberevents.toString(), tourJSON);
        


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
    /*guide: tourGuide,*/

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


