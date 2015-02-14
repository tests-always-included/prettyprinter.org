/*global angular, window*/
angular.module('app').controller('prettyjs', [
    '$scope',
    function ($scope) {
        'use strict';

        $scope.options = {
            autoDetectJson: true,
            bom: false,
            commentSpace: "  ",
            commentSpaceOptions: [
                {
                    label: "No spaces",
                    value: ""
                },
                {
                    label: "Two spaces",
                    value: "  "
                },
                {
                    label: "One tab",
                    value: "\t"
                },
                {
                    label: "Newline",
                    value: "\n"
                }
            ],
            convertStrings: "double",
            convertStringsOptions: [
                {
                    label: "Keep as-is",
                    value: null
                },
                {
                    label: "Single quotes",
                    value: "single"
                },
                {
                    label: "Double quotes",
                    value: "double"
                }
            ],
            elseNewline: true,
            indent: "    ",
            indentOptions: [
                {
                    label: "0 spaces",
                    value: ""
                },
                {
                    label: "1 space",
                    value: " "
                },
                {
                    label: "2 spaces",
                    value: "  "
                },
                {
                    label: "3 spaces",
                    value: "   "
                },
                {
                    label: "4 spaces",
                    value: "    "
                },
                {
                    label: "1 tab",
                    value: "\t"
                }
            ],
            jslint: true,
            newline: "\n",
            noSpaceAfterIf: false,
            noSpaceAfterFor: false,
            noSpaceAfterFunction: false,
            noSpaceAfterSwitch: false,
            quoteProperties: null,
            quotePropertiesOptions: [
                {
                    label: "Do not alter",
                    value: null
                },
                {
                    label: "Add them",
                    value: true
                },
                {
                    label: "Remove them",
                    value: false
                }
            ]
        };
    }
]);
