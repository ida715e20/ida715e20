
   
   document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
        
        // initialView: 'dayGridMonth'
        firstDay: 1
        
        });
        
        calendar.render();
    });