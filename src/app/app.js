var app = angular.module('EducationPlatform', ['ngSanitize', 'ngRoute'])


app.config(['$compileProvider', '$routeProvider', function($compileProvider, $routeProvider) {

    $routeProvider
    .when('/', {
        controller: 'teacherDashboardCtrl',
        templateUrl:'../views/teacher-dashboard/teacher-dashboard-template.html'
    })
    .when('/smartQuiz', {
    	controller: 'smartQuizCtrl',
    	templateUrl: '../smartQuiz.html'
    })
    .when('/takeQuiz', {
        controller: 'takeQuizCtrl',
        templateUrl: '../views/take-quiz/take-quiz-template.html'
    })

    app.compileProvider = $compileProvider;

}]);