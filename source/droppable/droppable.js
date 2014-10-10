(function(){

    var theModule = angular.module('tvds.droppable', []);

    theModule.directive('droppable', [function(){
        return {
            scope: {
                drop: '&' //parent
            },
            restrict: 'A',
            link: function(scope, element){
                var el = element[0];
                el.addEventListener('dragover', function(e){
                    e.dataTransfer.dropEffect = 'move';
                    if (e.preventDefault) e.preventDefault();
                    this.classList.add('over');
                    return false;
                });
                el.addEventListener('dragenter', function(e){
                    this.classList.add('over');
                    return false;
                });
                el.addEventListener('dragleave', function(e){
                    this.classList.remove('over');
                    return false;
                });
                el.addEventListener('drop', function(e){
                    scope.$root.tweetId = e.dataTransfer.getData('Text');
                    // Stops some browsers from redirecting.
                    if (e.stopPropagation) e.stopPropagation();
                    this.classList.remove('over');
                    // call the drop passed drop function
                    scope.$apply('drop()');
                    return false;
                });
                el.addEventListener('dragend', function(e){
                    this.classList.remove('ts-error');
                    return false;
                });
            }
        };
    }]);

})();