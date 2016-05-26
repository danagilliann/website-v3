(function() {
    'use strict';

    var app = angular.module("myApp", ["myApp.config"]);

    app.controller("indexCtrl", function($scope, api_key) {
        $scope.poo = api_key;
    });

})();
