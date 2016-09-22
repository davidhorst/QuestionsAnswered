app.controller('loginController', ['$scope','$cookies','usersFactory', '$location', function($scope, $cookies, usersFactory, $location) {

  $scope.user = {};

  $scope.login = function (){
    var userObj = {username: $scope.user.username };
    usersFactory.login(userObj, function(data){
      $cookies.put('_user', data.success._id);
      $cookies.put('username', data.success.username);
      $location.url('/dashboard');
     });
  }; // End $scope.login

}]);
