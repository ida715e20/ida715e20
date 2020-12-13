var calendar, choseneventid;

let maxEvents = 30;

initCalendar();

function initCalendar() 
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
        //chosenevent får id'et for det event, der clickes på
        console.log(choseneventid);
       
        $('#guideInfo').html(event.event.extendedProps.description);
        $('#guidePart').html(event.event.extendedProps.participants);
        $('#guidePlace').html(event.event.extendedProps.place);
        /*$('#guideAccept').html(event.event.extendedProps.guide);*/
        $('#assGuide').modal('show');
      
        let g =document.getElementById("guideAvailable");
        if (g)
        {
          let guideSelect = localStorage.getItem("tourinfo" + choseneventid.toString());
          let tourLS = JSON.parse(guideSelect);
          g.innerHTML = tourLS['guide']
        }

        let sg =document.getElementById("selectedGuide")
        if (sg)
        {
          let guideSelect = localStorage.getItem("tourinfo" + choseneventid.toString());
          let tourLS = JSON.parse(guideSelect);
          if (tourLS['admin'] == true)
          {
            sg.innerHTML = tourLS['guide'];
          }
          else
          {
            sg.innerHTML = "";
          }
        }
        

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
    var uniqueID = getRandomInt(maxEvents)
    var tourGuide = "nobody";
    var adminGuide = false;
    // kører indtil eventet får et unikt id
    while (localStorage.getItem("tourinfo" + uniqueID.toString()) != null)
    {
      uniqueID = getRandomInt(maxEvents)
    }
  

    // Storing data:

    tour = {
      title: tourTitle, 
      date: tourDate, 
      start: time, 
      participants: maxP, 
      duration: tourDuration, 
      place: tourPlace, 
      id: uniqueID, 
      description: tourDescription, 
      guide: tourGuide, 
      admin: adminGuide
    };

  
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
      guide: tourGuide,
      admin: adminGuide

      
    });
    /* hvis vi opretter et event får vi denne besked
    document.getElementById("eventText").innerHTML = "You have succesfully created a new event!"*/
  }
  // hvis vi ikke kan oprette et event fordi vi har nået max antal, får vi denne besked
  else
  {
    document.getElementById("eventText").innerHTML = "You have reached the limit for new events!"
  }



}

function guideAccept(){
  
  let tourGuide = document.getElementById('guide1').value;
  console.log(tourGuide + " " + choseneventid);
  let eventname = "tourinfo" + choseneventid.toString();
  if (localStorage.getItem(eventname) != null)
  {   
    var existing = localStorage.getItem(eventname);
    existing = JSON.parse(existing);
    
    existing['guide'] = tourGuide;
    localStorage.setItem(eventname, JSON.stringify(existing));

  }
}


function setGuide()
{
  let selectguide = document.getElementById("selectGuide").value;
 
  console.log("admin chose " + selectguide);

  let eventname = "tourinfo" + choseneventid.toString();
  if (localStorage.getItem(eventname) != null)
  {
    
    var existing = localStorage.getItem(eventname);
    existing = JSON.parse(existing);
    
    existing['guide'] = selectguide;
    existing['admin'] = true;
    localStorage.setItem(eventname, JSON.stringify(existing));
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

function setStatus() {

  var idNr = document.getElementById("tourColor"); 
  var color = idNr.options[idNr.selectedIndex].value;
  calendar.getEventById(choseneventid).setProp("color", color);
}
