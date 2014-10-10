(function(){

    var myModule = angular.module('tvds.draggable', []);

    myModule.directive('draggable', [function(){
        return function(scope, element){
            var el = element[0];
            el.draggable = true;
            el.addEventListener('dragstart', function(e){
                e.dataTransfer.effectAllowed = "move";
                //TODO: make attribute name less implementation dependent
                e.dataTransfer.setData('Text', this.getAttribute('tweet'));
                this.classList.add('drag');
                return false;
            }, false);
            el.addEventListener('dragend', function(e){
                this.classList.remove('drag');
                return false;
            }, false);
        };
    }]);

})();