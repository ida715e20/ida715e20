function setup() {
    loadJSON('all', gotData);
    console.log('running');

    var button = select('#fpurchase');
    button.mousePressed(submitData);

    function submitData() {
      var firstname = select('#validationCustom01').value();
      //var word = select('#fword').value();
      var lastname = select('#validationCustom02').value();
      //var email = select('#validationCustom03').value();
      console.log(firstname, lastname);

      loadJSON('add/' + firstname + '/' + lastname), finished;
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


