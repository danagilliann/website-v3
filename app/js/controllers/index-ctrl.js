angular.module("myApp", ["myApp.config"]).run(function(api_key) {
    console.log("The key", api_key)
})
