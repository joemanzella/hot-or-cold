/*********Create the Variables *******/
var answer;
var counter = 0;
var randomNum;
var error;
var prevError;


$(document).ready(function(){
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	$('a.new').click(function(){
		newGame();
	});
	

	/********* Receive and process the User Input *********/
	$('#guessButton').click(function(event){
		event.preventDefault();
		var guess = parseInt($("#userGuess").val());
		counter ++;
		error = Math.abs( guess - answer );
		if( guess != '' ) {
				if( guess == answer) {
					$( "#feedback").replaceWith( '<h2 id="feedback">YOU DID IT!</h2>' );
					$( "#count").replaceWith( '<span id="count">' + counter + '</span>' );
				}
				else {
					$( "#guessList" ).append( "<li>" + guess + "</li>" );
					$( "#count").replaceWith( '<span id="count">' + counter + '</span>' );
					//console.log('Counter: ' + counter);
					//console.log('Error: ' + error);
					//console.log('PrevError: ' + prevError);
						
/*
						if (prevError > error) {
							$( "#feedback").replaceWith( '<h2 id="feedback">Hotter!!</h2>' );
							console.log('Direction: ' + 'Hotter');
						}
						else if (prevError < error) {
							$( "#feedback").replaceWith( '<h2 id="feedback">Colder.</h2>' );
							console.log('Direction: ' + 'Colder');
						}
						else {
							console.log('Direction: ' + "There's something wrong");
						}
*/

				}
			}
		else {
			window.confirm('You need to type something here between 1 and 100');
		};
		hotOrCold();
		prevError = error;
	});
});


/********* Generate a random number *********/
function genRandom() {
	var x = (Math.random() * 100) + 1;
	answer = parseInt(Math.floor(x));
	//console.log('randomNum: ' + answer);
};


function newGame(){
	genRandom();
	counter = 0;
}

function checkError() {

};

function displayResult() {
};


/******* HOT OR COLD ********/

function hotOrCold() {
	if (error == 0) {
		$( "#feedback").replaceWith( '<h2 id="feedback">YOU DID IT!</h2>' );
	}
	else if (error < prevError) {
		$( "#feedback").replaceWith( '<h2 id="feedback">Hotter</h2>' );
		//console.log('Direction: ' + 'Hotter');
	}
	else if (error > prevError) {
		$( "#feedback").replaceWith( '<h2 id="feedback">Colder</h2>' );
		//console.log('Direction: ' + 'Colder');
	}
	else {
		if (error < 5) {
			$( "#feedback").replaceWith( '<h2 id="feedback">SO Close!!</h2>' );
			}
		else if (error < 15) {
			$( "#feedback").replaceWith( '<h2 id="feedback">Sorta Close</h2>' );
		}
		else if (error < 25) {
			$( "#feedback").replaceWith( '<h2 id="feedback">Kinda Close</h2>' );
		}
		else if (error < 35) {
			$( "#feedback").replaceWith( '<h2 id="feedback">Not very close</h2>' );	
		}
		else {
			$( "#feedback").replaceWith( '<h2 id="feedback">You are far away</h2>' );	
		}
	}
};



/*********Are you close or not? *********/

/*
function hotOrCold() {
	if (counter == 1) {
		if (error == 0) {
			$( "#feedback").replaceWith( '<h2 id="feedback">YOU DID IT!</h2>' );
			}
		else if (error < 5) {
			$( "#feedback").replaceWith( '<h2 id="feedback">SO Close!!</h2>' );
			}
		else if (error < 15) {
			$( "#feedback").replaceWith( '<h2 id="feedback">Sorta Close</h2>' );
		}
		else if (error < 25) {
			$( "#feedback").replaceWith( '<h2 id="feedback">Kinda Close</h2>' );
		}
		else if (error < 35) {
			$( "#feedback").replaceWith( '<h2 id="feedback">Not very close</h2>' );	
		}
		else {
			$( "#feedback").replaceWith( '<h2 id="feedback">You are far away</h2>' );	
		}

	}
	else {
		if (error < 5) {
			$( "#feedback").replaceWith( '<h2 id="feedback">SO Close!!</h2>' );
			}
		else if (error < 15) {
			$( "#feedback").replaceWith( '<h2 id="feedback">Sorta Close</h2>' );
		}
		else if (error < 25) {
			$( "#feedback").replaceWith( '<h2 id="feedback">Kinda Close</h2>' );
		}
		else if (error < 35) {
			$( "#feedback").replaceWith( '<h2 id="feedback">Not very close</h2>' );	
		}
		else {
			$( "#feedback").replaceWith( '<h2 id="feedback">You are far away</h2>' );	
		}
	}

}

*/


//newGame() {
//Generate Random Number
//Get Guess
//Calculate Error 1
//Get 2nd Guess
//Calculate Error 2
//Compare Error 1 to Error 2
//};