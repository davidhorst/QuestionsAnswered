var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
          templateUrl: 'partials/login.html'
      })
    .when('/dashboard',{
          templateUrl: 'partials/dashboard.html'
      })
    .when('/users',{
          templateUrl: 'partials/users.html'
      })
    .otherwise({
      redirectTo: '/'
    });
});
