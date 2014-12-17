describe('Controller: myController', function () {
  var myController,
    $controller,
    myFactory,
    scope;

  beforeEach(function () {
    module('myApp');
    inject(function ($injector, $rootScope, _$controller_) {
      $controller = _$controller_; // magic syntax so I can have a reference of the same name as what I'm trying to get via injector. Angular ignores the underscores when looking up the dependency.
      myFactory = $injector.get('myFactory'); //alternative to magic syntax (my preferred)
      scope = $rootScope.$new();
      myController = $controller('myController', {
        scope: scope
      });
    });
  });

  describe('initial state', function () {
    it('shows hello', function () {
      expect(myController.showHello).toBe(true);
    });
    it('exposes doSomething', function () {
      expect(myController.doSomething).toEqual(myFactory.doSomething);
    });
    it('gets the greetings from myFactory', function () {
      spyOn(myFactory, 'getGreetingsAsync').and.callThrough();

      //instantiating controller again since getGreetingsAsync has already been
      //called! Which means the spy we just implemented hasn't had a chance to be called yet.
      $controller('myController');

      expect(myFactory.getGreetingsAsync).toHaveBeenCalled();
    });
  });

  describe('greetings', function () {
    it('gets populated', function () {
      scope.$digest();
      expect(myController.greetings).toEqual(['Hello!', 'Hi!', 'Welcome!']);
    });
  });
});