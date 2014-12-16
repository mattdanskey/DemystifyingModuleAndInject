function myFactory($q) {
  return {
    getAsync: function () {
      var response = $q.defer();
      response.resolve('hello!');
      return response.promise;
    },
    doSomething: function () {
      alert('I did sometimg!');
    }
  };
}

angular.module('myApp.services', []).factory('myFactory', myFactory);