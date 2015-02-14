/*global angular, window*/
angular.module('app').filter('prettyjsFilter', function () {
    'use strict';

    return function (input, options, defaultString) {
        if (typeof input === 'string' && input.length) {
            options.jsonOverrides = false;

            if (options.autoDetectJson) {
                if (input.trim().charAt(0) === '{') {
                    options.jsonOverrides = true;

                    // Copy the object so we don't mess with the user's settings
                    options = JSON.parse(JSON.stringify(options));
                    options.jslint = false;
                    options.convertStrings = "double";
                    options.quoteProperties = true;
                }
            }

            try {
                return window.prettyJs(input, options);
            } catch (ex) {
                return ex.toString();
            }
        }

        return defaultString || '';
    };
});
