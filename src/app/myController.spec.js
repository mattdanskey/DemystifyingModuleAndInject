describe('Controller: myController', function () {
  var controller;
  var $controller;
  var myFactory;

  beforeEach(function () {
    module('myApp', function ($provide) {
      $provide.value('myFactory', {
        getGreetingsAsync: function () {
          return {
            then: function () {}
          };
        }
      });
    });
    inject(function ($injector) {
      $controller = $injector.get('$controller');
      myFactory = $injector.get('myFactory');
      controller = $controller('myController');
    });
  });

  describe('initial state', function () {
    it('has showHello as true', function () {
      expect(controller.showHello).toBe(true);
    });

    it('calls myFactory\'s getGreetingsAsync', function () {
      spyOn(myFactory, 'getGreetingsAsync').and.callThrough();

      $controller('myController');

      expect(myFactory.getGreetingsAsync).toHaveBeenCalled();
    });
  });
});