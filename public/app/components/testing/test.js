(function(){
 var testController = function () {
     var vm = this
     vm.message = "hi there"
 }
 
 
    angular
        .module('mathApp')
        .controller('test', testController)

})()