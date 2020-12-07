
/*
var dict = {"one" : [15, 4.5],
    "two" : [34, 3.3],
    "three" : [67, 5.0],
    "four" : [32, 4.1],
    "five": [28, 3.0],
    "six": [29, 2.0],
    "seven": [30, 4.0]
};


var dictstring = JSON.stringify(dict);

var fs = require('fs');
fs.writeFile("thing.json", dictstring, function(err, result) {
    if(err) console.log('error', err);
});
*/

console.log("hej")

fetch("thing.json").
      then(response => response.json()).
      then(data => 
      {
             console.log(data.name)
       })









const fs = require('fs');

const cart = {
    "childrenticketcount": 1,
    "name": "Mega Corp.",
    "order_count": 83,
    "address": "Infinity Loop Drive",
}
console.log(cart)
const jsonstring = JSON.stringify(cart);

fs.writeFileSync('thing.json', jsonstring, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})

function getdatatest(){

    let child=document.getElementById('childticket').value;
    myJSON = JSON.stringify(child);
    
    console.log(child);
    
}
   

