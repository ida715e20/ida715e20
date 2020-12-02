calendarMain(); 
addListner(); 

function calendarMain(){

  var calendar, tourList=[]; 

  initCalender();
  createTour(); 

  function addListner(){
    lort.addEventListener("click", createTour()); 
  }

  function initCalender() {
    document.addEventListener('DOMContentLoaded', function() {
      var calendarEl = document.getElementById('calendar');
      calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        firstDay: 1,
        events:[  {title: 'My Event',
        start: '2020-12-01',
        description: 'This is a cool event'}],
      
      });

    calendar.render();
   });
}

  function createTour(){
    //  let tourDate = document.getElementById('fdate'); 
    //  let tourTitle = document.getElementById('ftour'); 
    document.getElementById("ftitle").innerHTML = date();

    //   var date = 2020-12-03; 
    //   var titel = 'test';
    //  calendar.addEvent(date, title);
    //  alert("Hello! I am an alert box!!");
    

    //  let date = tourDate.value;
    //  tourDate.value = "";
    //  let title = tourTitle.value; 
    //  tourTitle.value = " "; 

      
    //  let tour = {
    //    tdate: date, 
    //    ttitle: title,

    //  }; 

     
    //  tourList.push(tour);

  }

 
 function addTour(event){
  calendar.addEvent({
     title: tourList.ttitle,
     start: tourList.tdate,

   });


 }


}


