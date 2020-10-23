"use strict";

angular
  .module("myApp.view4", ["ngRoute"])
  .controller("View4Ctrl", function ($scope, ergastAPIservice, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;
    ergastAPIservice.getDriverDetails($scope.id).then(
      function (response) {
        $scope.driver =
          response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
        console.log($scope.driver.Driver.driverId, "success");
      },
      function (response) {
        console.log(response, "response");
      },
    );
    ergastAPIservice.getDriverRaces($scope.id).then(
      function (response) {
        $scope.races = response.data.MRData.RaceTable.Races;
      },
      function (response) {
        console.log(response, "response");
      },
    );
  });
