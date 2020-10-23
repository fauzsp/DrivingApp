"use strict";

angular
  .module("myApp.view3", ["ngRoute"])

  .controller("View3Ctrl", function ($scope, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.driversList = [];
    $scope.searchFilter = function (driver) {
      var keyword = new RegExp($scope.nameFilter, "i");
      return (
        !$scope.nameFilter ||
        keyword.test(driver.Driver.givenName) ||
        keyword.test(driver.Driver.familyName)
      );
    };
    ergastAPIservice.driversData().then(
      function (response) {
        $scope.driversList = [];
        $scope.driversList =
          response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      },
      function (response) {},
    );
  });
