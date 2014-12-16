describe('Controller: myController', function () {
  var controller,
    myFactory,
    scope;

  beforeEach(function () {
    module('myApp');
    inject(function ($injector, $rootScope, $controller) {
      myFactory = $injector.get('myFactory');
      scope = $rootScope.$new();
      controller = $controller('myController', {
        scope: scope
      });
    });
  });

  describe('initial state', function () {
    it('exposes hello', function () {
      expect(controller.hello).toBe('Hello');
    });
    it('exposes doSomething', function () {
      expect(controller.doSomething).toEqual(myFactory.doSomething);
    });
  });

  describe('myFactoryThings', function () {
    it('gets populated', function () {
      scope.$digest();
      expect(controller.myFactoryThings).toBe('hello!');
    });
  });
});