(function(){

    var link = function(scope, el, attr) {
        el.on('click', function(){
            el.css('color', '#fff')
        })
    }
    
    var colorChange = function() {
        return {
            restrict: 'A',
            link: link 
        }
    }

    angular
        .module("mathApp")
        .directive('colorChange', colorChange)
})()