(function() {
    'use strict';

    var app = angular.module("myApp", ["myApp.config"]);

    app.controller("indexCtrl", function($scope, api_key, $http) {
        $scope.api_key = api_key;
        $scope.color = "Enter a color";

        $scope.submit = function() {
            console.log(true);
        };
    });

})();
