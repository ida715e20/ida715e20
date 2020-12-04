getdata()

var dict = {"one" : [15, 4.5],
    "two" : [34, 3.3],
    "three" : [67, 5.0],
    "four" : [32, 4.1],
    "five": [28, 3.0],
    "six": [29, 2.0],
};


var dictstring = JSON.stringify(dict);

var fs = require('fs');
fs.writeFile("thing.json", dictstring, function(err, result) {
    if(err) console.log('error', err);
});


function getdata(){
    
    
    let child = document.getElementById("childticket").value;
    myJSON = JSON.stringify(child);
    
    var fs = require('fs');
    fs.writeFile("thing.json", myJSON, function(err, result) {
    if(err) console.log('error', err);}
)}

