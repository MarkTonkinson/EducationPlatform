angular.module('EducationPlatform')
.service('LazyDirectiveLoader', ['$rootScope', '$q', '$compile', function($rootScope, $q, $compile) {
    //credit to: https://github.com/gillyb/angularjs-helpers
    var _directivesLoaded = [];
    //I don't need the attribute mapper
    // You can use this method to dynamically compile the loaded directive
    var _loadDirective = function(directiveName, attrsMap) {
        
        //var elementName = _snakeCase(directiveName);
        console.log('attrsMap ', attrsMap)
        if(attrsMap === undefined){
            attrsMap=''
        }
        var element = '<div edu-draggable class=' + directiveName + '><' + directiveName + ' ' + attrsMap +'></' + directiveName + '></div>';
        // TODO: convert `attrsMap` to attributes on the directive element tag
        return $compile(element)($rootScope);
    };

    //don't need this because I'm going to pass it the actual name
    // var _snakeCase = function(name) {
    //     var SNAKE_CASE_REGEXP = /[A-Z]/g;
    //     separator = '-';
    //     return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
    //         return (pos ? separator : '') + letter.toLowerCase();
    //     });
    // };

    return {
        loadDirective: _loadDirective,
    };

}]);