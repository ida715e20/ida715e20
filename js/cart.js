let children=localStorage.getItem("childrencount");
let students=localStorage.getItem("studentscount");
let adults=localStorage.getItem("adultscount");
let tickets=localStorage.getItem("ticketscount");
let theme=localStorage.getItem("themetour");


if(children==null) children=0;
if(students==null) students=0;
if(adults==null) adults=0;

document.getElementById("childrencount_id").innerHTML = children;
document.getElementById("studentscount_id").innerHTML = students;
document.getElementById("adultscount_id").innerHTML = adults;
document.getElementById("ticketscount_id").innerHTML = tickets;
document.getElementById("theme_id").innerHTML = theme;


function getdata(){
    let child=document.getElementById('childticket').value;
    let student=document.getElementById('studentticket').value;
    let adult=document.getElementById('adultticket').value;
    let count=parseInt(child) + parseInt(student) + parseInt(adult);
    let theme1=document.getElementById('theme1tour').value;
 
    
    localStorage.setItem("childrencount", child);
    localStorage.setItem("studentscount", student);
    localStorage.setItem("adultscount", adult);
    localStorage.setItem("ticketscount", count);
    localStorage.setItem("themetour", theme1);
