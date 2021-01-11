function setup() {
    loadJSON('all', gotData);
    console.log('running');

    var button = select('#fpurchase');
    button.mousePressed(submitData);

    function submitData() {
      var firstname = select('#validationCustom01').value();
      var word = select('#fword').value();
      console.log(firstname);

      loadJSON('add/' + firstname + '/' + word), finished;
      // loadJSON('add/' + word + '/' + score), finished;

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


