var app = angular.module('EducationPlatform', ['ngSanitize'])


app.config(['$compileProvider', function($compileProvider) {

    // $routeProvider.when('/', {
    //     templateUrl: 'views/Home.html',
    //     controller: 'HomeController'
    // });

    app.compileProvider = $compileProvider;

}]);