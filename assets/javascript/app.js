//load game//
	window.onload = function() {
	var answersCorrect = 0;
	var answersWrong = 0;
	var gamePlay = true;
	var counter;
	var theInterval = setInterval(function() {
	    	counter--;
	      	if (counter >= 0) {
	        gamePlay = true;
	        }
	       	if (counter === 0) {
	         alert('Out of time...');
	         clearInterval(theInterval);
	         endGame();
	       	}
	    }, 1000);

	//if player chooses right answer, 'Correct Answers' increase
			$(".right").click(function(){
			console.log("hey you are right");
			$(".answersright").html("Answers Right: " + 1);

			})

		
			// //if player chooses wrong answer, 'Wrong Answers' increases
			$(".wrong").click(function(){
			console.log("hey you are wrong");
			$(".answerswrong").html("Answers Wrong: " + 1);

	
			})
	//start button initiates timer and timer counts down from 1:00 minute//
	$("#startGame").click( function(){
		console.log(startGame);
	    counter = 60;
	    
	});
	//game ends when time runs out or player clicks 'done' button//
	$("#done").click( function(){
		gamePlay = false;
		console.log(done);
		var counter = 0;
		endGame();
		console.log(endGame + "done");
	});

	//call endGame function when click occures or timer runs out//
	function endGame(){
		//show score
		clearInterval(theInterval);

	};
	};
	
	//refresh page

//end window load



