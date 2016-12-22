
//$(document).ready(function() {console.log('document.ready fires');});
	// onclick handler that submits form from 'submit button'
	$('#submission').on('submit', function(e) {
		e.preventDefault();
		console.log('Submit fires');
		submitAnswers();					
	});
	
	console.log('before submitAnswers');
	// var submitBtn = $('submitBtn').val(); 

	function submitAnswers() {
		console.log('entering the submitAnswers function')
		var total = 10;
		var score = 0;

		//captures each of the questions answers in a variable
		var q1 = document.forms['javaScriptQuiz']['q1'].value;
		var q2 = document.forms['javaScriptQuiz']['q2'].value;
		var q3 = document.forms['javaScriptQuiz']['q3'].value;
		var q4 = document.forms['javaScriptQuiz']['q4'].value;
		var q5 = document.forms['javaScriptQuiz']['q5'].value;
		var q6 = document.forms['javaScriptQuiz']['q6'].value;
		var q7 = document.forms['javaScriptQuiz']['q7'].value;
		var q8 = document.forms['javaScriptQuiz']['q8'].value;
		var q9 = document.forms['javaScriptQuiz']['q9'].value;
		var q10 = document.forms['javaScriptQuiz']['q10'].value;
		console.log('runs questions');

		//Validation
		for(var i = 1; i <= total; i++ ){
			if(eval('q' + i) == null || eval('q' + i) == ''){
				console.log('for loop and if validation statment ran');
				alert('You missed a question');
				return false;
			}
		}

		// Are the answers to test
		var answers = ['b', 'a', 'c', 'b', 'a', 'd', 'a', 'a', 'b', 'a'];
		for(var i = 1; i <= total; i++){
			if(eval('q' + 1) == answers[i - 1] ){
				console.log('Evaluating answers');
				score ++;
				console.log('Your score is ' + score);
			}
		}
		//return false;
	}

	
	//for dynamically changing the checked fi
	// if ( $("#cb").attr("checked") === true ) {...}
	// if ( $("#cb").attr("checked") == "checked" ) {...}
    // onsubmit="return validateForm()
	//onclick function that submits the form
	// $('#submitBtn').on('submit', function() {
	// 	return submitAnswers();
	// 	console.log('submit worked');
	// });



