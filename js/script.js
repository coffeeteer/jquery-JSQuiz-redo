$(document).ready(function() {
	//console.log('document.ready fires');
	console.log('before submitAnswers');
	function submitAnswers() {
		console.log('entering the submitAnswers function')
		var total = 10;
		var score = 0;

		//captures each of the questions answers in a variable
		var q1 = document.form['javaScriptQuiz']['q1'].value;
		var q2 = document.form['javaScriptQuiz']['q2'].value;
		var q3 = document.form['javaScriptQuiz']['q3'].value;
		var q4 = document.form['javaScriptQuiz']['q4'].value;
		var q5 = document.form['javaScriptQuiz']['q5'].value;
		var q6 = document.form['javaScriptQuiz']['q6'].value;
		var q7 = document.form['javaScriptQuiz']['q7'].value;
		var q8 = document.form['javaScriptQuiz']['q8'].value;
		var q9 = document.form['javaScriptQuiz']['q9'].value;
		var q10 = document.form['javaScriptQuiz']['q10'].value;
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
		return false;
	}

	$('#submitBtn').on('submit', function() {
		console.log('Submit fires');
		submitAnswers();					
	});
	
	//for dynamically changing the checked fi
	// if ( $("#cb").attr("checked") === true ) {...}
	// if ( $("#cb").attr("checked") == "checked" ) {...}
    // onsubmit="return validateForm()
	//onclick function that submits the form
	// $('#submitBtn').on('submit', function() {
	// 	return submitAnswers();
	// 	console.log('submit worked');
	// });
});