angular.module("EducationPlatform")
.factory('testService', function(){
	 var service = {}
	 service.hello = "hello there"
	 service.update = function(newObj){
	 	service.hello = newObj
	 }
	 return service

})