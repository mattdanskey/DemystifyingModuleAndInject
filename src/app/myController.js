function myController(myFactory) {
  this.hello = "Hello";

  var that = this;
  myFactory.getAsync().then(function (greeting) {
    that.myFactoryThings = greeting;
  });

  this.doSomething = myFactory.doSomething;
}

angular.module('myApp').controller(myController);