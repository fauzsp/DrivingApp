angular.module("myApp.services", []).factory("ergastAPIservice", [
  "$http",
  function ($http) {
    var eargestAPI = {};

    eargestAPI.getDrivers = function () {
      var url = "http://ergast.com/api/f1/2013/driverStandings.json";
      var method = "JSONP";
      return $http({
        url: url,
        method: method,
      }).then(
        function successCallback(response) {
          console.log(
            response.data.MRData.StandingsTable.StandingsLists[0]
              .DriverStandings,
            "success",
          );
        },
        function errorCallback(response) {
          console.log(response, "error");
        },
      );
      // return $http({
      //   method: "JSONP",
      //   url:
      //     "http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK",
      // });
    };
    return eargestAPI;
  },
]);
