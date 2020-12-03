
// Retrieving data:
text = localStorage.getItem("testJSON");
myJSON = JSON.parse(text);


let c=document.getElementById("childrencount_id");
if (c) c.innerHTML = myJSON.children;

let s=document.getElementById("studentscount_id");
if (s) s.innerHTML = myJSON.students;

let a=document.getElementById("adultscount_id");
if (a) a.innerHTML = myJSON.adults;



// fix den her - laves som de andre //
document.getElementById("ticketscount_id").innerHTML = parseInt(myJSON.children) + parseInt(myJSON.students) + parseInt(myJSON.adults);

// fix den her - laves som de andre //
document.getElementById("theme_id").innerHTML = myJSON.theme;






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





