angular.module("EducationPlatform")
.service("smartQuizService", function(){
	var quizzes = []

	this.addQuiz = function(quizObj){
		quizzes.push(quizObj)
		console.log('quizzes ', quizzes)
	}
	this.getQuiz = function(teacherName, quizName){
		return quizzes 	
	}

})