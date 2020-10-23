angular.module("myApp.services", []).factory("ergastAPIservice", [
  "$http",
  "$q",
  function ($http, $q) {
    return {
      driversData: function () {
        var method = "GET";
        var url = "http://ergast.com/api/f1/2013/driverStandings.json";
        var defer = $q.defer();
        $http({
          method: method,
          url: url,
        })
          .then(function (response) {
            defer.resolve(response);
          })
          .catch(function (err) {
            defer.reject(err);
          });
        return defer.promise;
      },
      getDriverDetails: function (id) {
        var method = "GET";
        var url =
          "http://ergast.com/api/f1/2013/drivers/" +
          id +
          "/driverStandings.json";
        var defer = $q.defer();
        $http({
          method: method,
          url: url,
        })
          .then(function (response) {
            defer.resolve(response);
          })
          .catch(function (err) {
            defer.reject(err);
          });
        return defer.promise;
      },
      getDriverRaces: function (id) {
        var method = "GET";
        var url =
          "http://ergast.com/api/f1/2013/drivers/ " + id + " /results.json";
        var defer = $q.defer();
        $http({
          method: method,
          url: url,
        })
          .then(function (response) {
            defer.resolve(response);
          })
          .catch(function (err) {
            defer.reject(err);
          });
        return defer.promise;
      },
    };
  },
]);
