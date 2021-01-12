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
  //ugen starter mandag, hvis der er angivet 1. hvis der ikke er angivet noget starter ugen søndag    
      firstDay: 1,  
      events: [],
  //Ved et click på event popper et modul vindue op    
      eventClick: function(event,){

        // admin Modal 
        $('#eventTitle').html(event.event.title); 
        $('#eventInfo').html(event.event.extendedProps.description);
        $('#eventPart').html(event.event.extendedProps.participants);
        $('#eventPlace').html(event.event.extendedProps.place);
        var d = event.event.start.toDateString();
        $('#eventStart').html(event.event.start);

        $('#eventModal').modal('show');
        choseneventid = event.event.id; 
        //chosenevent får id'et for det event, der clickes på
        console.log(choseneventid);
       
        // guide Modal
        $('#guideInfo').html(event.event.extendedProps.description);
        $('#guidePart').html(event.event.extendedProps.participants);
        $('#guidePlace').html(event.event.extendedProps.place);
        /*$('#guideAccept').html(event.event.extendedProps.guide);*/
        $('#assGuide').modal('show');
      
        // retrieving data fra ls ved eventclick
        let g =document.getElementById("guideAvailable");
        if (g)
        {
          let guideSelect = localStorage.getItem("tourinfo" + choseneventid.toString());
          let tourLS = JSON.parse(guideSelect);
          g.innerHTML = tourLS['guide']
        }
        //overrider indholdet af guideAvailable, når der vælges en selectedGuide
        //sker kun når admin == true, for at forhindre det sker på alle events
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
    
// retrieving data for new tour
    for (let i = 0; i < maxEvents; i++)
    {
      let eventname = "tourinfo" + i.toString();
//findes der et event i local storage der hedder tourinfo1 osv. hvis den findes bliver den created
      if (localStorage.getItem(eventname) != null) 
      {
        tourtext = localStorage.getItem(eventname); 
        tourLS = JSON.parse(tourtext);
//events bliver tilføjet til admin og guide calendar  
        calendar.addEvent({  
//Turdata fra ls bliver indlæst i kalenderen
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
  // Kun for at sætte en øvre grænse, kunne være et hvilket som helst tal
  if (localStorage.length < maxEvents)
  {
    var tourTitle = document.getElementById('fticketTheme').value;
    var tourDate =  document.getElementById('fdate').value;
    var time = new Date(tourDate);
    var maxP = document.getElementById('fmaxParticipants').value;
    var tourDuration = document.getElementById('fduration').value;
    var tourPlace = document.getElementById('fplace').value;
    var tourDescription = document.getElementById('fDescription').value;
    var uniqueID = getRandomInt(maxEvents)
    var tourGuide = "nobody";
    var adminGuide = false;
    // kører indtil eventet får et unikt id
    //hvis eventet eksisterer med det genererede id så laves der et nyt id
    while (localStorage.getItem("tourinfo" + uniqueID.toString()) != null)
    {
      uniqueID = getRandomInt(maxEvents) //getRandomInt function står til sidst i koden
    }
  

    // Storing data i LS:
    //information om tur i et array
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
    
    //Nye event indlæses med det samme i kalenderen    
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
  }
  // hvis vi ikke kan oprette et event fordi vi har nået max antal, får vi denne besked
  else
  {
    document.getElementById("eventText").innerHTML = "You have reached the limit for new events!"
  }



}

function guideAccept(){
//hvis et event findes i LS, tilskrives navnet på den guide der accepterer turen
//se s.53 i opgaven  
  let tourGuide = document.getElementById('guideResponse').value;
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
//samme logik som ved guideAccept
//admin ændres fra false til true
//admins valg af guide overrider navnet på den guide, der har accepteret turen
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
//maxEvent hentes fra linje 114 og 121
//Math.floor returnerer en integer så man får et helt tal
function getRandomInt(maxEvents) {
  return Math.floor(Math.random() * Math.floor(maxEvents));
}

function setStatus() {

  var idNr = document.getElementById("tourColor"); 
  var color = idNr.options[idNr.selectedIndex].value;
  calendar.getEventById(choseneventid).setProp("color", color);
}
