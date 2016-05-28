(function() {
    'use strict';

    var app = angular.module("myApp", ["myApp.config", "ngAnimate"]);

    app.controller("indexCtrl", function($scope, api_key, $http) {
        $scope.color = "Enter a color";

        $scope.submit = function() {
            var url = "https://api.behance.net/v2/projects?callback=JSON_CALLBACK&color_hex=" + $scope.color + "&client_id=" + api_key;
            
            $http.jsonp(url)
                .then(function success(res) {
                    console.log(res);
                }, function err(res) {
                    console.log(url);
            });
        };
    });

})();
