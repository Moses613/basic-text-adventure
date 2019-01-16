"use strict";

//Tracks progress through the game
var tracker = 1;

//Element getter thing
function $(id) {
    return document.getElementById(id);
}

//Randomize the placeholder for the character name
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

//Creates different Game Over messages for each step of the game
function updateGameOverMessage(x) {
    var message;
    
    switch (x) {
        case 1:
            message = "Just because the Internet said it, does not make it true.<br>BWAHAHAHA!!!!!";
            break;
        default:
            message = "";
    }
    var html = "<h1 class=\"game_over\">" + message + "<h1>" +
        "<h2>Push reload to try again</h2>";
    return html;
}

//Displays the Game Over screen
function gameOver() {
    alert("You, good sir, have lost.");
    $("body").innerHTML = updateGameOverMessage(tracker);
}

//Gets the html for the next stage of the game
var updatePage = function(x) {
    var html = "";
    
    switch (x) {
        case 1:         //Current stage
            html = "This is stage two"; //Stage two html
            break;
    }
    
    return html;
}


//Progresses game, called when player selects the right answer
var progressGame = function(x) {
    $("body").innerHTML = updatePage(x);
    tracker++;
}

//Calls progress() on click of the right answer
var OnCorrectChoice = function() {
    progressGame(tracker);
}

window.onload = function() {
    $("button1").onclick = gameOver;
    $("correctAnswer").onclick = OnCorrectChoice;
    
    randomizePlaceholder();
}

//TODO: function to assign event handlers after each progression
