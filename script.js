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
