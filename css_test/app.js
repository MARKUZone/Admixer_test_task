
var app = angular.module("App", []);

app.controller("Ctrl", function ($scope) {

    $scope.colors = [
        {
            Name: "Зеленый",
            Value: 1
        },
        {
            Name: "Красный",
            Value: 2
        },
        {
            Name: "Синий",
            Value: 3
        }
    ];

    $scope.color = 3;


});
