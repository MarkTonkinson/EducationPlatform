describe('mainCtrl', function(){
	var scope;
	//var scope2;
	var ctrl;

	console.log('hey there ', beforeEach(module('EducationPlatform')))
	beforeEach(module('EducationPlatform'));
	console.log('hey there ', beforeEach(module('EducationPlatform')))
	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		ctrl = $controller('mainCtrl', {$scope: scope})
		//anotherCtrl = $controller('anotherCtrl', {$scope: scope2})
	}))

	it("should have a scope.test", function(){
		expect(scope.test).toBe('hello world')
	})

	// it("should test another controller", function(){
	// 	expect(scope2.test).toBe('hello world 2')
	// })
})

