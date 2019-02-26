//Below are the variables
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log( computerChoices );


var wins = 0;
var losses = 0;
var guesses = 9;
var lettersGuessed = [];


var directionsText = document.getElementById( "directions-text" );
var winsText = document.getElementById( "wins-text" );
var lossesText = document.getElementById( "losses-text" );
var guessesText = document.getElementById( "guessesleft-text" );
var lettersGuessedText = document.getElementById( "letters-text" );


document.onkeyup = function ( event ) {
    var userGuess = event.key.toLowerCase();
    console.log( userGuess );

    var computerGuess = computerChoices[Math.floor( Math.random() * computerChoices.length )];
    console.log( computerGuess );


    //Letters go down if user guess is not equal to computer guess
    if ( ( userGuess !== computerGuess ) && ( guesses > 1 ) ) {
        lettersGuessed.push( userGuess );
        guesses--;

    }
    //if user guesses the computers then user wins
    else if ( userGuess === computerGuess ) {
        wins++;
        alert( "You win!" );


    }
    //    
    else {
        losses++;
    }





    guessesText.textContent = "Guesses left: " + guesses;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
    ;
};



