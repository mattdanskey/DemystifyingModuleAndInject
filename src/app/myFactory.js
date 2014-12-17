function myFactory($q) {
  return {
    getGreetingsAsync: function () {
      //pretend this is an $http call or something that would return a promise
      //without being contrived
      var response = $q.defer();
      response.resolve(['Hello!', 'Hi!', 'Welcome!']);
      return response.promise;
    },
    doSomething: function () {
      alert('I did something!');
    }
  };
}

angular.module('myApp.services', []).factory('myFactory', myFactory);