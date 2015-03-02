angular.module("EducationPlatform")
.factory('testService', function(){
	 var service = {}
	 service.hello = "hello there"
	 service.update = function(newObj){
	 	service.hello = newObj
	 }

	service.user = {
		name: 'Mark',
		role: 'Teacher',
		profilePic: 'resources/profile.jpg'
	}

	 return service

})