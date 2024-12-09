const opNames = {
    "0":spaceMarineCaptain,
    "1":assaultIntercessorSergeant,
    "2":intercessorSergeant,
    "3":assaultIntercessorGrenadier,
    "4":assaultIntercessorWarrior,
    "5":eliminatorSniper,
    "6":heavyIntercessorGunner,
    "7":intercessorGunner,
    "8":intercessorWarrior
};

function toggleOperative(value){
    var opForms = document.getElementById("forms").getElementsByTagName("form")
    for (var i = 0; i < opForms.length; i++){
        opForms[i].style.display = "none";
    }
    opNames[value].style.display = "block";
}