var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {

    $scope.name = "Vishakha";
    $scope.message = "Welcome to AngularJS";

    $scope.changeMessage = function() {
        $scope.message = "Button Clicked!";
    };

});