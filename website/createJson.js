function setup() {
    loadJSON('/words.json', gotData);
    console.log('running');
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    var button = select('#fconfirm');
    button.mousePressed(submitWord);

    function submitWord() {
      var theme = select('#fticketTheme').value();
      var duration = select('#fduration').value(); 
      var date = select('#fdate').value();
      var participants = select('#fmaxParticipants').value();
      var place = select('#fplace').value();
      var ticket = select('#fticketTypes').value();
      var description = select('#fDescription').value();
      var uniqueID = getRandomInt(5000);
      console.log(theme, duration);
    

      loadJSON('add/' + theme + '/' + duration + '/' + date + '/' + participants + '/' + place + '/' + ticket
      + '/' + description + '/' + uniqueID), finished;
    
      function finished(data) {
        console.log(data)
      }
    }
  }
 
  function setup() {
    loadJSON('tour.json')

      var button = select('#fpurchase');
      button.mousePressed(tourData);

      function tourData(){
      var child = select('#childticket').value();
      var student = select('#studentticket').value();
      var adult = select('#adultticket').value();
      var tourtheme = select('#themetour').value();
      var ticketcount = parseInt(child) + parseInt(student) + parseInt(adult);
      var childticket_price = 40
      var studentticket_price = 60
      var adultticket_price = 80
      var totalcost = parseInt(child * childticket_price) + parseInt(student * studentticket_price) + parseInt(adult * adultticket_price);
     
      console.log(tourtheme);

      loadJSON('website/addpurchase/' +  child + '/' + student + '/' + adult + '/' + tourtheme + '/' + ticketcount + '/' + totalcost), finished;
      
      function finished(data) {
        console.log(data)
      }
    }
  }

function gotData(data) {
  console.log(data);
  var keys = Object.keys(data);
  console.log(keys);
}

