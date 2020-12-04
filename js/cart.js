

// Retrieving data:
text = localStorage.getItem("testJSON");
myJSON = JSON.parse(text);


let c=document.getElementById("childrencount_id");
if (c) c.innerHTML = myJSON.children;

let s=document.getElementById("studentscount_id");
if (s) s.innerHTML = myJSON.students;

let a=document.getElementById("adultscount_id");
if (a) a.innerHTML = myJSON.adults;

let tc=document.getElementById("ticketscount_id");
if (tc) tc.innerHTML = parseInt(myJSON.children) + parseInt(myJSON.students) + parseInt(myJSON.adults);


let th=document.getElementById("theme_id");
if (th) th.innerHTML = myJSON.theme;

let childticket_price = 40
let studentticket_price = 60
let adultticket_price = 80

let t=document.getElementById("totalcost_id");
if (t) t.innerHTML = parseInt(myJSON.children * childticket_price) + parseInt(myJSON.students * studentticket_price) + parseInt(myJSON.adults * adultticket_price);



function getdata(){
    
    let child=document.getElementById('childticket').value;
    let student=document.getElementById('studentticket').value;
    let adult=document.getElementById('adultticket').value;

    let theme=document.getElementById('themetour').innerHTML;
    
 
    // Storing data:
    cart = {children: child, students: student, adults: adult, theme: theme};
    myJSON = JSON.stringify(cart);
    localStorage.setItem("testJSON", myJSON);

}






    

