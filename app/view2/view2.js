"use strict";

angular
  .module("myApp.view2", ["ngRoute"])
  .controller("View2Ctrl", [
    "$scope",
    function ($scope) {
      $scope.message = "hello guys221";
    },
  ]);
