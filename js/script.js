$(document).ready(function() {
	function submitAnswers() {
		var total = 5;
		var score = 0;

		//captures each of the questions answers in a variable
		var q1 = document.form['javaScriptQuiz']['q1'].value();
		var q2 = document.form['javaScriptQuiz']['q2'].value();
		var q3 = document.form['javaScriptQuiz']['q3'].value();
		var q4 = document.form['javaScriptQuiz']['q4'].value();
		var q5 = document.form['javaScriptQuiz']['q5'].value();

		//Validation
		for(var i = 1; i <= total; i++ ){
			if(eval('q' + i) === null || eval('q' + i) === ''){
				console.log('for loop and if validation statment ran');
				alert('You missed a question');
				return false;
			}
		}
	}
});