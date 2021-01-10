var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bookingsystem"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  var sql = "INSERT INTO guest(name, address) VALUES ('Maria', 'smilevej')";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  
});



// var mysql = require('mysql');
// var express = require('express'); 

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: ""
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// const app = express(); 

// app.get("/createdb",(req, res) =>{
//     let sql ='CREATE DATABASE nhmBooking'
//     db.query(sql, (err)=>{
//         if(err){
//             throw err
//         }
//         res.send('Database created'); 
//     });
// });

// app.listen('3000', () =>{
//     console.log('server er startet')

// }); 