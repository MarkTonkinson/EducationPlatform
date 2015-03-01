angular.module('EducationPlatform')
.service('DirectivesFileMapper', function() {
	//credit to: https://github.com/gillyb/angularjs-helpers
    var _mapper = {
        QuickQuiz: 'components/quickquiz/quickQuizDirective.js',
        QuickNotes: 'components/quicknotes/quickNotes'
    };

    function _get(directiveName) {
        return _mapper[directiveName];
    }

    return {
        get: _get
    };

});