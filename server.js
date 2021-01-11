var fs = require('fs');
var tourData = fs.readFileSync('tour.json');
var tourTicket = JSON.parse(tourData);
var mysql = require('mysql'); 
var data = fs.readFileSync('words.json');
var words = JSON.parse(data);
// const publicDirectory = path.join(__dirname,'./public');
// app.use(express.s)

const db = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "",
  database: "bookingsystem"

});

// db.connect(function(error) {
//     if (error) {
//       console.log(error);
//     }
   
//     console.log('connected to database');
//   }); 


console.log('Server is running');
const path = require('path');
const {response} = require('express');
var express = require('express');
var app = express();

var server = app.listen(3002, listening);

function listening() {
    console.log("listening...");
}
/*
function butt(){
var button = select('#fpurchase');
button.mousePressed(dbeks); 

function dbeks(){
app.get('/purchase-page', (req, res) =>  {

    var test = document.getElementById("validationCustom01").value();

    var sql = "INSERT INTO guest (name, address) VALUES (?,?)"; 

    db.query(sql,[test, "he"], function (err, result) {
      
      if (err) throw err;
      console.log("1 record inserted" + result);

  });

});
}

}
*/
///:lastName/:email/:address/:city/:zip/:countryCode/:phoneNumber

app.get('add/:firstName/:word', addWord);

function addWord(request, response) {
    console.log("hallo");
    //Data bliver her sat til request parametres
    //Dette er det som brugeren skriver ind efter /search/
    //altså hvis brugeren skriver /search/gaming/5
    //så er gaming/5 vores request.params og dette bliver data sat til.
    var data = request.params;
    //her finder den ordet, altså gaming inde i data var
    var firstName = data.firstName;
    var word = data.word;
    //her tager den nummeret 5 Number() gør, at den ikke tager den som string i data
    // var lastName = data.lastName;
    // var email = data.email;
    // var address = data.address;
    // var city = data.city;
    // var zip = data.zip;
    // var countryCode = data.countryCode;
    // var phoneNumber = data.phoneNumber;

    var reply;
    if(!score) {
        reply = {
            msg: "Score is required."
         }
         response.send(reply); 

        } else {
    console.log("okay");
   
    //her laves et "key-value pair". Dette fungere ved, at der laves en array af word
    //hvor hver af ordene i listen bliver parret med deres score
    //words[word] = score;
    //lastname, email, address, city, zip, countrycode, phonenumber
    var sql = "INSERT INTO guest (firstname, lastname) VALUES (?,?)";
    
    db.query(sql,[firstName, word], function (err, result) {
      
        //lastName, email, address, city, zip, countryCode, phoneNumber
      if (err) throw err;
      console.log("1 record inserted" + result);

  });
    
/*     function finished(err) {
         console.log('all set.');
         var reply = {
            word: word,
            score: score,
            status: "Succes."
        }     
        response.send(reply); 
       }
       */
    }   
}


app.get('/add/:word/:score', addTest);

function addTest(request, response) {
    //Data bliver her sat til request parametres
    //Dette er det som brugeren skriver ind efter /search/
    //altså hvis brugeren skriver /search/gaming/5
    //så er gaming/5 vores request.params og dette bliver data sat til.
    var data = request.params;
    //her finder den ordet, altså gaming inde i data var
    var word = data.word;
    //her tager den nummeret 5 Number() gør, at den ikke tager den som string i data
    var score = data.score;
    var reply;
    if(!score) {
        reply = {
            msg: "Score is required."
         }
         response.send(reply); 

        } else {
    //her laves et "key-value pair". Dette fungere ved, at der laves en array af word
    //hvor hver af ordene i listen bliver parret med deres score
    //words[word] = score;
    //Konverter teksten til noget json kan forstå og lav god formateringen igennem arguemnterne
    var sql = "INSERT INTO guest (firstname, lastname) VALUES (?, ?)";
    
    db.query(sql,[word, score], function (err, result) {
      
        //lastName, email, address, city, zip, countryCode, phoneNumber
      if (err) throw err;
      console.log("1 record inserted" + result);

  });
    }   
}

//Database: 

// app.get("./purchase-page",(req, res) => {
//     res.render("purchase-page");
// });

// app.post('./purchase-page', function(req, res){
//     console.log(req.body);

//     var sql = "INSERT INTO guest VALUES('"+req.body.validationCustom01 +"', '"+ req.body.validationCustom04+"')";
//     db.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("1 record inserted");
//       });
// });

app.use('/', express.static(__dirname + '/'));


//Routing til gæste sider
app.use('/AalborgInMiddleAge', express.static(__dirname + '/tourpage.html'));
app.use('/WitchesAndGhosts', express.static(__dirname + '/tourpage2.html'));
app.use('/AalborgDuringOccupation', express.static(__dirname + '/tourpage3.html'));
app.use('/purchase', express.static(__dirname + '/purchase-page.html'));
app.use('/private-tour', express.static(__dirname + '/private-city-tours.html'));
app.use('/', express.static(__dirname + '/index.html'));
app.use('/login/', express.static(__dirname + '/admin/index.html'));

//Routing til admin sider
app.use('/admin/calendar', express.static(__dirname + '/admin/calendar.html'));
app.use('/admin/home', express.static(__dirname + '/admin/home.html'));
app.use('/admin/statistics', express.static(__dirname + '/admin/statistics.html'));
app.use('/admin/booking', express.static(__dirname + '/website/booking.html'));

//Routing til guide sider
app.use('/guide/calendar', express.static(__dirname + '/guide/calendar.html'));
app.use('/guide/home', express.static(__dirname + '/guide/home.html'));
app.use('/guide/report', express.static(__dirname + '/guide/report.html'));

app.use('/test', express.static(__dirname + '/databaseTest.html'))

//app.get('/website/add/:theme/:duration?/:date/:participants/:place/:ticket/:description/:uniqueID', addWord);//
app.get('/website/addpurchase/:child/:student/:adult/:tourtheme/:ticketcount/:totalcost/:uniqueID', addticket);

function addticket(request, response) {
    var data = request.params;
    var child = data.child;
    var student = data.student;
    var adult = data.adult;
    var tourtheme = data.tourtheme;
    var ticketcount = data.ticketcount;
    var totalcost = data.totalcost;
    var uniqueID = data.uniqueID;
    console.log('ok');
    
    tourTicket[uniqueID] = {uniqueID, child, student, adult, ticketcount, totalcost, tourtheme}
    var tourdata = JSON.stringify(tourTicket, null, 2)

    //skriver til json filen med en callback function finished
    fs.writeFile('tour.json', tourdata, finished)
    function finished(err) {
        console.log('all set.');
        var reply = {
           word: child,
           status: "Succes."
       }     
       response.send(reply); 
      }
}
