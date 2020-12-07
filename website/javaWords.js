function setup() {
    loadJSON('all', gotData);
    console.log('running');

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
      console.log(theme, duration);

      loadJSON('add/' + theme + '/' + duration + '/' + date + '/' + participants + '/' + place + '/' + ticket
      + '/' + description), finished;

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