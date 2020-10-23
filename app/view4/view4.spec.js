"use strict";

describe("myApp.view3 module", function () {
  beforeEach(module("myApp.view3"));

  describe("view4 controller", function () {
    it("should ....", inject(function ($controller) {
      //spec body
      var view4Ctrl = $controller("View3Ctrl");
      expect(view4Ctrl).toBeDefined();
    }));
  });
});
