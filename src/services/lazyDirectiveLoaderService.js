angular.module('EducationPlatform')
.service('LazyDirectiveLoader', ['$rootScope', '$q', '$compile', function($rootScope, $q, $compile) {
    //credit to: https://github.com/gillyb/angularjs-helpers
    var _directivesLoaded = [];

    var _loadDirective = function(directiveName, attrsMap) {
        
        //this way it doesn't append undefined in the element
        if(attrsMap === undefined){

            attrsMap=''
        }

        //if you make this droppable, it starts to nest divs inside each other
        var element = '<div><' + directiveName + ' ' + attrsMap +'></' + directiveName + '></div>';
        // TODO: convert `attrsMap` to attributes on the directive element tag
        return $compile(element)($rootScope);
    };

    return {
        loadDirective: _loadDirective,
    };

}]);