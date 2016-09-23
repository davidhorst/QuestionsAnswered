app.controller('loginController', ['$scope','$cookies','usersFactory', '$location', function($scope, $cookies, usersFactory, $location) {

  $scope.user = {};

  $scope.login = function (){
    $scope.error = '';
    if (!$scope.user.username) { $scope.user.username = '';};
    console.log($scope.user.username);
    var userObj = {username: $scope.user.username };
    usersFactory.login(userObj, function(data){
      console.log(data);
      if (data.err){
        $scope.error = "Username validation failed, try again"
      } else if (data.success){
        $cookies.put('_user', data.success._id);
        $cookies.put('username', data.success.username);
        $location.url('/dashboard');
      }
     });
  }; // End $scope.login

}]);
