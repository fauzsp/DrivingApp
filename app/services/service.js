angular.module("myApp.services", []).factory("ergastAPIservice", ['$http', '$q', function ($http, $q) {
  return {
    get: function () {
      var method = "GET";
      var url = "http://ergast.com/api/f1/2013/driverStandings.json";
      var defer = $q.defer();
      $http({
        method: method,
        url: url,
      }).then(function (response) {
        defer.resolve(response);
      }).catch(function (err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  };
}]);