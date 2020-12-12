/*
// retrieving data for guide accept //
for (let i = 1; i < localStorage.length + 1; i++)
{
    guidetext = localStorage.getItem("guideAccept" + i.toString());
    guideLS = JSON.parse(guidetext);
}

let g1 =document.getElementById("guideAvailable");
if (g1) g1.innerHTML = guideLS.guide1;

let g2 =document.getElementById("guideAvailable2");
if (g2) g2.innerHTML = guideLS.guide2;

let g3 =document.getElementById("guideAvailable3");
if (g3) g3.innerHTML = guideLS.guide3;


function guideAccept(){

let tourGuide1 = document.getElementById('guide1').value;

let tourGuide2 = document.getElementById('guide2').value;
let tourGuide3 = document.getElementById('guide3').value;

// storing data
guides = {guide1: tourGuide1} /*guide2: tourGuide2, guide3: tourGuide3}
guideLS = JSON.stringify(guides);

let numberguide = localStorage.length + 1;
localStorage.setItem("guideAccept" + numberguide.toString(), guideLS);
}
*/


/*

// retrieving data for setGuide //
for (let i = 1; i < localStorage.length + 1; i++)
{
    sguidetext = localStorage.getItem("selectGuide" + i.toString());
    sguideLS = JSON.parse(sguidetext);
}

let sg1 =document.getElementById("selectedGuide");
if (sg1) sg1.innerHTML = sguideLS.sguide;


function setGuide(){
 let selectguide = document.getElementById("selectGuide").value;

selectGuide = {sguide: selectguide}
sguideLS = JSON.stringify(selectGuide)

let numbersGuide = localStorage.length + 1;
localStorage.setItem("selectGuide" + numbersGuide.toString(), sguideLS);
}

/*
//retrieving data
for (let i = 1; i < localStorage.length + 1; i++)
{
    guideaccept = localStorage.getItem("guideAcceptJSON" + i.toString());
    guideAcceptJSON = JSON.parse(guideaccept);
}

let ga =document.getElementById("guideAccept1");
if (ga) ga.innerHTML = guideAcceptJSON.guideA;

let gb =document.getElementById("guideAccept2");
if (gb) gb.innerHTML = guideAcceptJSON.guideB;

let gc =document.getElementById("guideAccept3");
if (gc) gc.innerHTML = guideAcceptJSON.guideC;


function guideAccept(){
    let guideAccept1 = document.getElementById('guideAvailable1').value;
    let guideAccept2 = document.getElementById('guideAvailable2').value;
    let guideAccept3 = document.getElementById('guideAvailable3').value;

    // storing data

    guidesAccepted = {guideA: guideAccept1, guideB: guideAccept2, guideC: guideAccept3}
    guideAcceptJSON = JSON.stringify(guidesAccepted)
    
    let numberguide = localStorage.length + 1;
    localStorage.setItem("guideAcceptJSON" + numberguide.toString(), guideAcceptJSON);
}
*/
