$(function() {

  $('#calendar').fullCalendar({
    defaultView: 'month',

    header: {
      center: 'addEventButton'
    },

    customButtons: {
      addEventButton: {
        text: 'add event...',
        click: function() {
          var dateStr = prompt('Enter a date in YYYY-MM-DD format');
          var date = moment(dateStr);

          if (date.isValid()) {
            $('#calendar').fullCalendar('renderEvent', {
              title: 'dynamic event',
              start: date,
              allDay: true
            });
            alert('Great. Now, update your database...');
          } else {
            alert('Invalid date.');
          }
        }
      }
    }
  });

});

