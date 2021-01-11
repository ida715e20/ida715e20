

var mysql      = require('mysql')
var express = require('express')

var app = express(); 

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bookingsystem",
  
});




//Connecting to database
db.connect(function(err) {

    if (err) throw err;
    console.log("Connected!");

  });


  app.get('/db', (req, res) =>  {

    var na = document.getElementById("validationCustom01").value();
    var ad = document.getElementById("validationCustom04").value();

    var sql = "INSERT INTO guest (name, address) VALUES (?,?) "; 
    db.query(sql,[na, ad], function (err, result) {
      
      if (err) throw err;
      console.log("1 record inserted" + result);



  });

});

