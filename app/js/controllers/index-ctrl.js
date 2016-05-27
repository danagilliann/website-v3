(function() {
    'use strict';

    var app = angular.module("myApp", ["myApp.config"]);

    app.controller("indexCtrl", function($scope, api_key, $http) {
        $scope.api_key = api_key;
        $scope.color = "";

        $scope.submit = function() {
            console.log("poo");
            :wa
        }
    });

})();
