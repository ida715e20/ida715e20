let children=localStorage.getItem("childrencount");
let students=localStorage.getItem("studentscount");
let adults=localStorage.getItem("adultscount");
let tickets=localStorage.getItem("ticketscount")

if(children==null) children=0;
if(students==null) students=0;
if(adults==null) adults=0;

document.getElementById("childrencount_id").innerHTML = children;
document.getElementById("studentscount_id").innerHTML = students;
document.getElementById("adultscount_id").innerHTML = adults;
document.getElementById("ticketscount_id").innerHTML = tickets;

function getdata(){
    let child=document.getElementById('childticket').value;
    let student=document.getElementById('studentticket').value;
    let adult=document.getElementById('adultticket').value;
    let count=child+student+adult;
    
    localStorage.setItem("childrencount", child);
    localStorage.setItem("studentscount", student);
    localStorage.setItem("adultscount", adult);
    localStorage.setItem("ticketcount", count);
 
}
