function setup() {
    loadJSON('all', gotData);
    console.log('running');

    var button = select('#submit');
    button.mousePressed(submitWord);

    function submitWord() {
      var word = select('#word').value();
      var score = select('#score').value();
      console.log(word, score);

      loadJSON('add/' + word + '/' + score), finished;

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