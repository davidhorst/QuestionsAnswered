app.controller('questionsController', ['$scope','$cookies','usersFactory', 'questionsFactory', '$location', function($scope, $cookies, usersFactory, questionsFactory, $location) {

  $scope.user = $cookies.getAll();
  $scope.question = {};

  $scope.createQuestion = function(){
    $scope.error = '';
    $scope.question._user = $scope.user._user;
    questionsFactory.createQuestion($scope.question, function(returned_data){
      //check for errors in returned data, then:
      if (returned_data.err){
        $scope.error = "Your question must be at least 10 characters";
      } else {
        $scope.question = {};
        $location.url('/dashboard');
      }; // error catch
    }); // end createQuestion process
  }; // End createQuestion

  $scope.logout = function(){
    $cookies.remove('_user');
    $cookies.remove('username');
    $location.url('/');
  }; // End logout

}]);
