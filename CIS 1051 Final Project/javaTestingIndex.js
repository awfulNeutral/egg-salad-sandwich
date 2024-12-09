/*// User Input-----------------------------------------------------------------
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}
// Counter Program------------------------------------------------------------
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
// If Statements--------------------------------------------------------------
let opCount = 1;
let specOpCount = 1;
let maxOpCount = 7;
let leaderCount = 1;

if(leaderCount < 1){
    console.log("You must add a Leader to your Kill Team.");
}
    else if(leaderCount > 1){
    console.log("Your Kill Team can only have one Leader operative.");
    }
else{
    console.log("hasLeader *thumbs up emoji*");
}

if(opCount <= 1){
    console.log("opCount *thumbs up emoji*");
}
else{
    console.log("You can only include this operative on your Kill Team once.")
}

if(specOpCount <= 1){
    console.log("specOpCount *thumbs up emoji*");
}
else{
    console.log("You cannot select more than one of these operatives combined.")
}

if(maxOpCount < 6){
    console.log("You must include 6 operatives on this Kill Team.");
}
else if(maxOpCount > 6){
    console.log("You cannot include more than 6 operatives on this Kill Team.");
}
else{
    console.log("maxOpCount *thumbs up emoji*")
}

// Checked Property---------------------------------------------------
const abrBtn = document.getElementById("abrBtn");
const brBtn = document.getElementById("brBtn");
const sbrBtn = document.getElementById("sbrBtn");
const addToRoster = document.getElementById("addToRoster");
const rosterResult = document.getElementById("rosterResult");

addToRoster.onclick = function(){
    if(abrBtn.checked){
        rosterResult.textContent = `Intercessor is equipped with: Auto bolt rifle`
    }
    else if(brBtn.checked){
        rosterResult.textContent = `Intercessor is equipped with: Bolt rifle`
    }
    else if(sbrBtn.checked){
        rosterResult.textContent = `Intercessor is equipped with: Stalker bolt rifle`
    }
    else{
        rosterResult.textContent = `You must select a weapon for this operative.`
    }
}

// Rewatch Ternary & Switches

const opType = document.getElementById("opType");

switch(opType){
    case "space marine captain":
        console.log("Space Marine Captain!");
        break;
    case "assault intercessor sergeant":
        console.log("Assault Intercessor Sergeant!");
        break;

}*/


const spaceMarineCaptain = document.getElementsById(spaceMarineCaptain);


function toggleOperative(){
    let value = document.getElementById("opSelector").value

    switch(value){
        case 0:
            spaceMarineCaptain.style.display = "block";
            break;
    }
}
