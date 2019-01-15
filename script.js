"use strict";

function $(id) {
    return document.getElementById(id);
}

function blowUpEverything() {
    alert("Your computer will now explode because I told it to.");
    $("body").innerHTML = "";
}

window.onload = function() {
    $("button1").onclick = blowUpEverything;
}

/*TODO: Randomize the placeholder for the player's name, using names like
Sir Egghead the Extortionist, Sir Graham the Laxative Creampuff, Sir Necromancer the Necromancer the Third Jr., Sir Bob the Electric Cow,
Dangamere the Dreadfully Woe-Begone Donkey, Sir John "In-The-John" Hamburgerstein, Umbridge the Unbelievably-Fat*/
