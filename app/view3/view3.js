"use strict";

angular
  .module("myApp.view3", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view3", {
        templateUrl: "view3/view3.html",
        controller: "View3Ctrl",
      });
    },
  ])

  .controller("View3Ctrl", function ($scope, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.driversList = [];
    ergastAPIservice.get().then(function (response) {
      $scope.driversList = [];
      $scope.driversList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      console.log($scope.driversList, "response");

    }, function (response) {
    });
  });
