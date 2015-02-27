describe('mainCtrl', function(){
	var scope;

	var ctrl;

	
	beforeEach(module('EducationPlatform'));
	
	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		ctrl = $controller('mainCtrl', {$scope: scope})
		
	}))

	it("should have a scope.test", function(){
		expect(scope.test).toBe('hello world')
	})

})

