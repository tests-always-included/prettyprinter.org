/*global angular, window*/
angular.module('app').directive('focusHere', [
    '$timeout',
    function ($timeout) {
        return {
            link: function (scope, element) {
                /*jslint unparam:true*/
                $timeout(function() {
                    element[0].focus(); 
                });
            }
        };
    }
]);
