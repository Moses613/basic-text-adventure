"use strict";

var tracker = 0;

function $(id) {
    return document.getElementById(id);
}

function updateGameOverMessage(x) {
    var message;
    
    switch (x) {
        case 0:
            message = "Just because the Internet said it, does not make it true.<br>BWAHAHAHA!!!!!";
            break;
        default:
            message = "";
    }
    var html = "<h1 class=\"game_over\">" + message + "<h1>" +
        "<h2>Push reload to try again</h2>";
    return html;
}

function gameOver() {
    alert("You, good sir, have lost.");
    $("body").innerHTML = updateGameOverMessage(tracker);
}

var randomizePlaceholder = function() {
    var numero = Math.floor((Math.random() * 10) + 1);
    var placeholderAttribute = "";
    
    switch (numero) {
        case 1:
            placeholderAttribute = "Sir Egghead the Extortionist";
            break;
        case 2:
            placeholderAttribute = "Sir Graham the Laxative Creampuff";
            break;
        case 3:
            placeholderAttribute = "Sir Necromancer the Necromancer the Third Jr.";
            break;
        case 4:
            placeholderAttribute = "Sir Bob the Electric Cow";
            break;
        case 5:
            placeholderAttribute = "Dangamere the Dreadfully Woe-Begone Donkey";
            break;
        case 6:
            placeholderAttribute = "Sir John \"In-The-John\" Hamburgerstein";
            break;
        case 7:
            placeholderAttribute = "Umbridge the Terrifyingly-Fat";
            break;
        case 8:
            placeholderAttribute = "Sir Knightly the Overly-Cautious";
            break;
        case 9:
            placeholderAttribute = "Eggbert the Perpetually Boring";
            break;
        case 10:
            placeholderAttribute = "Sir Suspenders-In-A-Twist";
            break;
    }
    
    $("name").setAttribute("placeholder", placeholderAttribute);
}


window.onload = function() {
    $("button1").onclick = gameOver;
    randomizePlaceholder();
}

