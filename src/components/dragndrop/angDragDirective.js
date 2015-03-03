angular.module('EducationPlatform').
directive('angDraggable', function($document) {
  //This is from the advanced directive angular documentation example
  //It now moves everything, but it doesn't hmmm allow any other functionality . . .
  //I can't access the input on the notes for example
  //what would happen if I added the attribute and then removed it after it moved?
  
  //there is conflict trying to do it this way . . .
  //There should be a way but I'm going to have to continue to work
  //to figure it out over time, for now, I may just need to copy and give them all the same
  //functionality
  return {
    template: '<button>AllowMove</button>',
    link:function(scope, element, attr) {
      console.log(element)
    var startX = 0, startY = 0, x = 0, y = 0;
    scope.allowMove = function(){
      console.log('allowMove called!')
      //element.bind('click', function(){
        var allowMove = true;
        if(allowMove === true){
          
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
            
            element.unbind()
            allowMove = false


          })
        }
      }
    }
  }
});