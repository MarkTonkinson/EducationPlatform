var app = angular.module('EducationPlatform', ['ngSanitize', 'ngRoute'])


app.config(['$compileProvider', '$routeProvider', function($compileProvider, $routeProvider) {

    $routeProvider
    .when('/', {
        controller: 'mainCtrl'
    })
    .when('/smartQuiz', {
    	controller: 'smartQuizCtrl',
    	templateUrl: '../smartQuiz.html'
    })

    app.compileProvider = $compileProvider;

}]);