
// retrieving data //
for (let i = 1; i < localStorage.length + 1; i++)
{
    guidetext = localStorage.getItem("guideJSON" + i.toString());
    guideJSON = JSON.parse(guidetext);
}

let g1 =document.getElementById("guideAvailable1");
if (g1) g1.innerHTML = guideJSON.guide1;

let g2 =document.getElementById("guideAvailable3");
if (g2) g2.innerHTML = guideJSON.guide2;

let g3 =document.getElementById("guideAvailable3");
if (g3) g3.innerHTML = guideJSON.guide3;


function setGuide(){

let tourGuide1 = document.getElementById('guide1').value;
let tourGuide2 = document.getElementById('guide2').value;
let tourGuide3 = document.getElementById('guide3').value;

// storing data
guides = {guide1: tourGuide1, guide2: tourGuide2, guide3: tourGuide3};
guideJSON = JSON.stringify(guides);

let numberguide = localStorage.length + 1;
localStorage.setItem("guideJSON" + numberguide.toString(), guideJSON);
}
