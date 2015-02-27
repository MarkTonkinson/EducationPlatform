describe('anotherCtrl', function(){
	var scope;
	var ctrl;

	beforeEach(module('EducationPlatform'));

	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		ctrl = $controller('anotherCtrl', {$scope: scope})
		//anotherCtrl = $controller('anotherCtrl', {$scope: scope2})
	}))


	it("should test another controller 2", function(){
		expect(scope.test).toBe('hello world 2')
	})
})