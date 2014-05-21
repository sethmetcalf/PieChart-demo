(function () {
    'use strict';

    angular.module('myApp.controllers')
        .controller('PieCtrl', ['$scope', 'd3', function ($scope, d3) {
            $scope.title = "PieCtrl";
            $scope.charts = d3.range(12).map(function () {
                return d3.range(10).map(Math.random)
            });
            $scope.shared = {
                ourData: d3.range(10).map(Math.random)
            };
            $scope.d3OnClick = function (item) {
                alert(item.name);
            };

        }]
    );
}());
