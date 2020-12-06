

let choseneventid = null;

var calendar;
/*
, tours = [{

  title: "Test1", 
  start: '2020-12-12', 
  description: "Hej med dig .. blablabla"
 },

  {

    title: "Test 2", 
    start: '2020-12-21',
    description: "Blablalbalba"

  }] 
*/
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
       
        $('#eventModal').modal('show'); 
        $('.modal-title').html(event.event.title); 
        $('.modal-body').html(event.event.start);
        choseneventid = event.event.id;
    }
    
          
    });
    /*
    calendar.on('eventClick', function (info) {
    chosenevent = info.event.id;
    }); 
    */
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
    place: tourPlace,
  });
/*
  console.log(calendar.getEventById("noget"))
*/
}

function removeEvent()
{
  calendar.getEventById(choseneventid).remove();
}


  /*
   var obj = {
     title: tourTitle,
     start: date

   }; 

  tours.push(obj); */
/*
 function event.remove()
 {
  $('#calendar').fullCalendar('removeEvents', calEvent._id);
   
   console.log("removing event");
   console.log(chosenevent)
   console.log(chosenevent.event.time)
   console.log(chosenevent.event.start)
   console.log(chosenevent.event.title)
   console.log(chosenevent.event.participants)
   console.log(chosenevent.event.duration)
   console.log(chosenevent.event.place)
   console.log(chosenevent.event.tourDate)
   console.log(chosenevent.event.tourTitle)
   
 }
 */