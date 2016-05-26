(function() {
    'use strict';

    // angular.module("myApp", ["myApp.config"]).run(function(api_key) {
    //     console.log(api_key)
    // });

    var app = angular.module("myApp", ["myApp.config"]);
    // var app = angular.module("myApp", ["myApp.config"]);

    app.controller("indexCtrl", function($scope, api_key) {
        $scope.poo = api_key;
    });

})();

// angular.module("myApp", ["myApp.config"]).run(function(api_key) {
//     console.log("The key", api_key);
// });
// 
// var app = angular.module("myApp", []);
// 
// app.controller("indexCtrl", function($scope) {
//     $scope.poo = "fart";
// });
