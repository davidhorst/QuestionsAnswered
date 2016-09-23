var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
          templateUrl: 'partials/login.html'
      })
    .when('/dashboard',{
          templateUrl: 'partials/dashboard.html'
      })
    .when('/question',{
          templateUrl: 'partials/question.html'
      })
    .when('/questions/:id',{
          templateUrl: 'partials/showquestion.html'
      })
    .when('/questions/:id/answer',{
          templateUrl: 'partials/answer.html'
      })
    .when('/users',{
          templateUrl: 'partials/users.html'
      })
    .otherwise({
      redirectTo: '/'
    });
});
