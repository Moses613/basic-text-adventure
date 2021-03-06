"use strict";

//Global variables
var tracker = 1; //Tracks progress throughout the game
var name = "Link"; //Provides a variable to hold the player's name, its default is a famous character's name
var nameInputted = false; //This is false until the first stage has been passed, and a character name input has been received

//Element getter thing
function $(id) {
    return document.getElementById(id);
}

function randomizePlaceholder() {
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

//Creates and returns the html for the next stage of the game
function updatePage(x) {
    var html = "";
    
    switch (x) {
        case 1:         //Represents initial stage (starting homepage)
            html = "<h1>Stage Two</h1>" + //Stage two html
                "<h2>One exquisitely ordinary day, " + name +
                " was taking a walk, when suddenly, the King appears!</h2>" + 
                "<h3>" + name + " chooses to:</h3><br>" +
                "<button id=\"correctAnswer\">Bow like an obedient pansy</button><button>Ignore him</button><button>Throw tomatoes</button>"; 
            break;
        case 2:
            html = "This is stage three";
            break;
    }
    
    return html;
}


//Progresses game, called when player selects the right answer
function progressGame(x) {
    alert("You made the right choice. Progressing to next stage...");
    $("body").innerHTML = updatePage(x); //Loads new html for the next stage
    
    //Updates the newly loaded DOM with the requisite event handlers
    $("correctAnswer").onclick = OnCorrectChoice;
    //TODO: Wrong choice buttons
    tracker++;
}

//Calls progress() on click of the right answer, passing the tracker as an argument, also gets the player's name as input during the first stage
function OnCorrectChoice() {
    //Gets player name input: executes once
    if (!nameInputted) {
        if ($("name").value !== "") {
            name = $("name").value;
            //If inputted value is null, the character's name remains the default
        }
        nameInputted = true;
    }
    
    //Progresses game, executes for all stages of the game
    progressGame(tracker);
}

window.onload = function() {
    $("button1").onclick = gameOver;
    $("correctAnswer").onclick = OnCorrectChoice;
    
    randomizePlaceholder();
}

//TODO: function to assign event handlers after each progression
