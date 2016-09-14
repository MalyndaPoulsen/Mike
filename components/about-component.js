(function () {
    angular.module('Mike')
        .component('aboutComponent', {
            templateUrl: 'components/about-component.html',
          controller: AboutController,
        })
        function AboutController(){
                  this.$onInit = function(){
            $.fn.extend({
                animateCss: function (animationName) {
                    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                        $(this).removeClass('animated ' + animationName);
                    });
                }
            });
  
       var waypoint1 = new Waypoint({
                element: document.getElementById('manin2'),
                handler: function (direction) {
                    if (direction === 'down') {
                        $('#wines3').animateCss('fadeIn');
               
                    }
                }
            })
        }
        }
}());