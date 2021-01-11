function setup() {
    loadJSON('all', gotData);
    console.log('running');

    var button = select('#fpurchase');
    button.mousePressed(submitData);

    function submitData() {
      var firstname = select('#validationCustom01').value();
      //var word = select('#fword').value();
      var lastname = select('#validationCustom02').value();
      var email = select('#validationCustom03').value();
      var address = select('#validationCustom04').value();
      var city = select('#validationCustom05').value();
      var zip = select('#validationCustom06').value();
      var countryCode = select('#validationCustom07').value();
      var phoneNumber = select('#validationCustom08').value();
      
      var existing = localStorage.getItem("cart");
      existing = JSON.parse(existing);
      console.log(existing['children']);

      var child = existing['children'];
      var student = existing['students'];
      var adult = existing['adults'];
      var tourtheme = existing['theme'];
     // var tourDate = existing['date'];//
      var ticketCount = parseInt(child) + parseInt(student) + parseInt(adult);

      console.log(firstname, lastname, email, address, city, zip, countryCode, phoneNumber, ticketCount);

      loadJSON('add/' + firstname + '/' + lastname + '/' + email + '/' + address + '/' + city
       + '/' + zip + '/' + countryCode + '/' + phoneNumber + '/' + ticketCount + '/' + tourtheme), finished;
      // loadJSON('add/' + word + '/' + score), finished;
      //'/' + word +
      //+ '/' + email

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


