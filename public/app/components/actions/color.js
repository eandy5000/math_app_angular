(function(){

    var link = function(scope, el, attr) {
        var sel = document.querySelector("p")
        var test = function(){
            console.log("I work")
            sel.classList.toggle("color")
        }
        sel.onclick = test
        console.log(sel)
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