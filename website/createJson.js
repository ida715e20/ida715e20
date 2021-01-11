
function getRandomInt(max) 
{
  return Math.floor(Math.random() * Math.floor(max));
}

function setup()
{
  loadJSON('tour.json')
  var button = select('#fpurchase');
  button.mousePressed(tourData); 
  
  function tourData()
  {
    
    if (localStorage.getItem("cart") != null)
    {
      var existing = localStorage.getItem("cart");
      existing = JSON.parse(existing);
      console.log(existing['children']);

      var child = existing['children'];
      var student = existing['students'];
      var adult = existing['adults'];
      var tourtheme = existing['theme'];
     // var tourDate = existing['date'];//
      var ticketcount = parseInt(child) + parseInt(student) + parseInt(adult);
      var childticket_price = 40
      var studentticket_price = 60
      var adultticket_price = 80
      var totalcost = parseInt(child * childticket_price) + parseInt(student * studentticket_price) + parseInt(adult * adultticket_price);
      var uniqueID = getRandomInt(5000);
      console.log(tourtheme);
      //variablerne + parametrene sendes til adressen /website/addpurchase/'
      loadJSON('/website/addpurchase/' +  child + '/' + student + '/' + adult + '/' + tourtheme + '/' + ticketcount + '/' + totalcost + '/' + uniqueID), finished;
    }
    
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
