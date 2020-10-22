// Declare app level module which depends on views, and core components
angular
  .module("myApp", [
    "ngRoute",
    "myApp.services",
    "myApp.view1",
    "myApp.view2",
    "myApp.view3",
    "myApp.version",
  ])

  .config([
    "$locationProvider",
    "$routeProvider",
    "$sceDelegateProvider",
    function ($locationProvider, $routeProvider, $sceDelegateProvider) {
      $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        "self",
        // Allow loading from our assets domain. **.
        "http://ergast.com/**",
      ]);
      $locationProvider.hashPrefix("!");
      $routeProvider
        .when("/", {
          templateUrl: "view1/view1.html",
          controller: "View1Ctrl",
        })
        .when("/view1", {
          templateUrl: "view1/view1.html",
          controller: "View1Ctrl",
        })
        .when("/view2", {
          templateUrl: "view2/view2.html",
          controller: "View2Ctrl",
        })
        .when("/view3", {
          templateUrl: "view3/view3.html",
          controller: "View3Ctrl",
        })
        .otherwise({ redirectTo: "/view1" });
    },
  ]);

// .config([
//   "$locationProvider",
//   "$routeProvider",
//   function ($locationProvider, $routeProvider) {
//     $locationProvider.hashPrefix("!");

//     $routeProvider.otherwise({ redirectTo: "/view1" });
//   },
// ]);
