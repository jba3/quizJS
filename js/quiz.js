var app = angular.module('quizApp', []);

app.directive('quiz', function(pokemonQuiz) {
	return {
		scope: {},
		templateUrl: 'quiz.htm',
		link: function(scope, elem, attrs) {
			scope.start = function() {
				// initialize score
				scope.id = 0;
				// get the first question into scope
				scope.getQuestion();
				// number of questions answered
				scope.answered = 0;
				// trainer rank for end of quiz
				scope.trainerRank = "";
				// mark as quiz started
				scope.quizOver = false;
				scope.inProgress = true;
			};

			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			
			scope.itemCorrect = function(selector){
				// flag it as green/success
				$('input[name=answer]:nth(' + scope.answer + ')').parents('li').addClass('list-group-item-success');
				// add a checkmark
				$('input[name=answer]:nth(' + scope.answer + ')').parents('li').find('span').addClass('glyphicon glyphicon-ok');
			}

			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------

			scope.itemIncorrect = function(selector){
				// flag it as red/incorrect
				$('input[name=answer]:checked').parents('li').addClass('list-group-item-danger');
				// add an X icon
				$('input[name=answer]:checked').parents('li').find('span').addClass('glyphicon glyphicon-remove');
			}

			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			
			scope.bail = function() {
				// outside URL
				location.href = 'http://www.pokemon.com/';
			};

			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			
			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
				$('#progressbar').css('width', '0%');
			}

			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			
			scope.getQuestion = function() {
				// fetch question
				var q = pokemonQuiz.getQuestion(scope.id);

				if(q) {
					// if there is a question, split variables out
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer - 1;// subtract 1 from answer since JS starts at 0 and DB starts at 1

					// have them answer next question
					scope.answerMode = true;
				} else {
					// if no more questions, end
					if (scope.score <= 5){
						scope.trainerRank = "Youngster";
					}else if (scope.score <= 8){
						scope.trainerRank = "Ranger";
					}else if (scope.score <= 9){
						scope.trainerRank = "Dragon Tamer";
					}else if (scope.score <= 10){
						scope.trainerRank = "Ace Trainer";
					}

					scope.quizOver = true;
				}
			};

			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			
			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length){
					alert('Select an answer first');
					return;
				}

				var answerChosen = $('input[name=answer]:checked').val();

				scope.answered += 1;

				// disable buttons so they can't change answer
				$('input[name=answer]').attr('disabled', true);

				// is it correct?
				if(answerChosen == (scope.options[scope.answer])) {
					// correct answer

					// increase score
					scope.score += 1;
					// flag it as correct
					scope.correctAns = true;
					// highlight and add the checkmark
					scope.itemCorrect('input[name=answer]:nth(' + scope.answer + ')');
				} else {
					// wrong answer

					// highlight the correct answer and add the checkmark
					scope.itemCorrect('input[name=answer]:nth(' + scope.answer + ')');
					// mark their selected answer as incorrect and add the X
					scope.itemIncorrect('input[name=answer]:checked');
					// flag it as incorrect
					scope.correctAns = false;
				}

				// increment the progress bar. hardcoded at 10% but could be dynamic
				$('#progressbar').css('width', (scope.answered*10) + '%');

				// change mode to answer selected and button clicked
				scope.answerMode = false;
			};

			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			
			scope.nextQuestion = function() {
				// increase the array index
				scope.id += 1;
				// grab the next question
				scope.getQuestion();
			}

			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			// ----------------------------------------------------------------------------------------------------
			
			// reset / initialize
			scope.reset();
		}
	}
});

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
			
app.factory('pokemonQuiz', function() {
	var questions = "";

	$.get("json/getQuestions.php", function(data){
		// parse the JSON into an array
		questions = $.parseJSON(data);
	});

	// ----------------------------------------------------------------------------------------------------
	// ----------------------------------------------------------------------------------------------------
	// ----------------------------------------------------------------------------------------------------

	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				// if questions left, get a new one
				return questions[id];
			} else {
				// end of the questions, bail out
				return false;
			}
		}
	};
});
