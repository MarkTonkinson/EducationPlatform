angular.module('EducationPlatform')
.directive('teacherLinks', function($document){
	//this doesnt compile right. Rather than replacing others it actually
	//disappears.
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			
		},
		templateUrl: 'components/teacherlinks/teacherLinksTemplate.html',
		link: function(scope, element, attrs){
			scope.list =[]
			if(Array.isArray(scope.list) === false){
				console.log("The teacher-links directive expects an array not " + scope.list)
				
			}
			var startX = 0, startY = 0, x = 0, y = 0;
    		scope.allowMove = function(){
     			console.log('allowMove called!', element)
      	
      			var allowMove = true;
        		
        		if(allowMove === true){
          			console.log('allowing to move')
          			element.on('mousedown', function(event) {
              		// Prevent default dragging of selected content
             		event.preventDefault();
		              	startX = event.screenX - x;
		              	startY = event.screenY - y;
		              	$document.on('mousemove', mousemove);
		              	$document.on('mouseup', mouseup);
		            });

		            function mousemove(event) {
		              y = event.screenY - startY;
		              x = event.screenX - startX;
		              element.css({
		                top: y + 'px',
		                left:  x + 'px'
		              });
		            }

		            function mouseup() {
		              $document.off('mousemove', mousemove);
		              $document.off('mouseup', mouseup);
		            }

                  	element.on('mouseup', function(event){
			            console.log('mouseup')
			            element.unbind()
			            allowMove = false
			        })
		        }
		    }

		}
	
	}
})