
function getRandomInt(max) 
{
  return Math.floor(Math.random() * Math.floor(max));
}

function setup()
{
  loadJSON('tour.json')
  var button = select('#fpurchase');
  button.mousePressed(tourData); 
  
  console.log("etellernadet")
  function tourData()
  {
    console.log("anders")
    var child = select('#childticket').value();
    var student = select('#studentticket').value();
    var adult = select('#adultticket').value();
    var tourtheme = document.getElementById('themetour').innerHTML;
    var ticketcount = parseInt(child) + parseInt(student) + parseInt(adult);
    var childticket_price = 40
    var studentticket_price = 60
    var adultticket_price = 80
    var totalcost = parseInt(child * childticket_price) + parseInt(student * studentticket_price) + parseInt(adult * adultticket_price);
    var uniqueID = getRandomInt(5000);
    console.log(tourtheme);

    loadJSON('/website/addpurchase/' +  child + '/' + student + '/' + adult + '/' + tourtheme + '/' + ticketcount + '/' + totalcost + '/' + uniqueID), finished;
  }
}
function finished(data) 
{
  console.log(data)
}

function gotData(data) 
{
  console.log(data);
  var keys = Object.keys(data);
  console.log(keys);
}

