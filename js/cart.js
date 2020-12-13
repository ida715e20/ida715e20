
// Retrieving data:
text = localStorage.getItem("cart");
localS = JSON.parse(text);


let c=document.getElementById("childrencount_id");
if (c) c.innerHTML = localS.children;

let s=document.getElementById("studentscount_id");
if (s) s.innerHTML = localS.students;

let a=document.getElementById("adultscount_id");
if (a) a.innerHTML = localS.adults;

let tc=document.getElementById("ticketscount_id");
if (tc) {tc.innerHTML = parseInt(localS.children) + parseInt(localS.students) + parseInt(localS.adults)};


let th=document.getElementById("theme_id");
if (th) th.innerHTML = localS.theme;

let td=document.getElementById("time_id"); 
if(td) td.innerHTML = localS.date;

let childticket_price = 40
let studentticket_price = 60
let adultticket_price = 80

let t=document.getElementById("totalcost_id");
if (t) {t.innerHTML = parseInt(localS.children * childticket_price) + parseInt(localS.students * studentticket_price) + parseInt(localS.adults * adultticket_price);}



function getdata(){
    
    let child=document.getElementById('childticket').value;
    let student=document.getElementById('studentticket').value;
    let adult=document.getElementById('adultticket').value;
    let theme=document.getElementById('themetour').innerHTML;
    let tourDate = document.getElementById('detailsTime').innerHTML; 
 
    // Storing data:
    cart = {children: child, students: student, adults: adult, theme: theme, date: tourDate};
    localS = JSON.stringify(cart);
    localStorage.setItem("cart", localS);
    console.log(child)
}










    

