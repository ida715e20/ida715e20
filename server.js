var fs = require ('fs');
var data = fs.readFileSync('words.json');
var words = JSON.parse(data);
console.log(words);

var tourData = fs.readFileSync('tour.json');
var tourTicket = JSON.parse(tourData);


console.log('Server is running');

const path = require('path');

const {response} = require('express');

var express = require('express');
const {json} = require('body-parser');

var app = express();

var server = app.listen(3001, listening);

function listening() {
    console.log("listening...");
}

app.use('/', express.static(__dirname + '/'));

app.use('/tourpage', express.static(__dirname + '/tourpage.html'));

app.get('/website/add/:theme/:duration?/:date/:participants/:place/:ticket/:description', addWord);

app.get('/website/addpurchase/:child/:student/:adult/:tourtheme/:ticketcount/:totalcost', addticket);

function addticket(request, response) {
    var data = request.params;
    var child = data.child;
    var student = data.student;
    var adult = data.adult;
    var tourtheme = data.tourtheme;
    var ticketcount = data.ticketcount;
    var totalcost = data.totalcost;
    response.send('ok');
    
    tourTicket[tourtheme] = {tourtheme, child, student, adult, ticketcount, totalcost}
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

function addWord(request, response) {
    //Data bliver her sat til request parametres
    //Dette er det som brugeren skriver ind efter /search/
    //altså hvis brugeren skriver /search/gaming/5
    //så er gaming/5 vores request.params og dette bliver data sat til.
    var data = request.params;
    //her finder den ordet, altså gaming inde i data var
    var title = data.theme;
    //her tager den nummeret 5 Number() gør, at den ikke tager den som string i data
    var duration = Number(data.duration);
    var date = data.date;
    var participants = data.participants;
    var place = data.place;
    var ticket = data.ticket;
    var description = data.description;
    var reply;
    if(!duration) {
        reply = {
            msg: "Score is required."
         }
         response.send(reply); 

        } else {
    //her laves et "key-value pair". Dette fungere ved, at der laves en array af word
    //hvor hver af ordene i listen bliver parret med deres score
    words[title] = {title, duration, date, participants, place, ticket, description}
    //Konverter teksten til noget json kan forstå og lav god formateringen igennem arguemnterne
    var data = JSON.stringify(words, null, 2)
    //skriver til json filen med en callback function finished
    fs.writeFile('words.json', data, finished)
    
     function finished(err) {
         console.log('all set.');
         var reply = {
            word: title,
            score: duration,
            status: "Succes."
        }     
        response.send(reply); 
       }
    }   
}

app.get('/website/all', sendAll);

function sendAll(request, response) {
    response.send(words);
}

//Dette er en route der gør, at hvis en bruger gør til stien:
// /search/{indsæt ord} så tjekker systemet om det ord,
//er i listen/databasen over ord. Dette gøres i gennem 
//if else længere nede og gennem response.send i bunden.
app.get('/website/search/:word', searchWord);

function searchWord(request, response) {
    //Her sættes var word til det ord, der bliver skrevet efter /search
    var word = request.params.word;
    var reply;
    //her tjekker vi, om det ord der blev skrevet ind er i "databasen"
    if (words[word]) {
        reply = {
        status: "found",
        word: word,
        score: words[word]
        }
    } 
    else {
            reply = {
            status: "not found",
            word: word,
            }
    }
    response.send(reply)
}
