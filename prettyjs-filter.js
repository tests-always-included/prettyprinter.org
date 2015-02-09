/*global angular, window*/
angular.module('app').filter('prettyjsFilter', function () {
    return function (input, options) {
        if (typeof input === 'string' && input.length) {
            try {
                return window.prettyJs(input, options);
            } catch (ex) {
                return ex.toString();
            }
        }

        return '';
    }
});
