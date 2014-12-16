function myController(myFactory) {
	var that = this;
	this.hello = "Hello";

	myFactory.getAsync().then(function (greeting) {
		that.myFactoryThings = greeting;
	});

	this.doSomething = myFactory.doSomething;
}

angular.module('myApp').controller(myController);