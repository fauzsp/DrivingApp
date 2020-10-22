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
    ergastAPIservice.getDrivers().then(
      function successCallback(response) {
        $scope.driversList = response;
        console.log($scope.driversList, "hello");
        // $scope.driversList =
        //   response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      },
      function errorCallback(response) {
        console.log(response.MRData, "error found");
      },
    );
  });
