(function(){
    var directions = function () {
        return {
            template: '<h1>template is working</h1>'
        }
    }

    angular
        .module('mathApp')
        .directive('mathDirections', directions)
})();