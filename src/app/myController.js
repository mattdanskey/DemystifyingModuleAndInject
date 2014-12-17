function myController(myFactory) {
  this.showHello = true;

  var that = this;
  myFactory.getGreetingsAsync().then(function (greetings) {
    that.greetings = greetings;
  });

  this.doSomething = myFactory.doSomething;
}

angular.module('myApp').controller('myController', ['myFactory', myController]);