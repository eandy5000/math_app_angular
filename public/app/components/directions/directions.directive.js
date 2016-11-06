(function(){
//in a directive the controller in a custom directive

    var directionsController = function() {
        var vm = this
        vm.message = "I'm from the controller"
    }

    
    var directions = function () {
        return {
            templateUrl: './app/components/directions/directions.html',
            controller: directionsController,
            controllerAs: 'vm'
        }
    }

    angular
        .module('mathApp')
        .directive('mathDirections', directions)
})();