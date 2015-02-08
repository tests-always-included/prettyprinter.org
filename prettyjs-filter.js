/*global angular, window*/
angular.module('app').filter('prettyjsFilter', function () {
    return function (input, options) {
        if (typeof input === 'string' && input.length) {
            return window.prettyJs(input, options);
        }

        return '';
    }
});
