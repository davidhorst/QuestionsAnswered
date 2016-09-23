app.controller('dashboardController', ['$scope','$cookies','usersFactory', 'questionsFactory', '$location', function($scope, $cookies, usersFactory, questionsFactory, $location) {

  $scope.user = $cookies.getAll();
  $scope.username = $scope.user.username

  var getQuestions = function(){
    questionsFactory.index(function(returned_data){
      if (returned_data.err){
        $scope.errors = err;
      } else {
        $scope.questions = returned_data.success;
      };
    })
  }; // reusable function to refresh questions scope

  getQuestions(); // set initial questions scope

  $scope.logout = function(){
    $cookies.remove('_user');
    $cookies.remove('username');
    $location.url('/');
  }; // End logout

}]);
