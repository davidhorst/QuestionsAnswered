app.controller('answersController', ['$scope','$cookies','usersFactory', 'questionsFactory', '$location', function($scope, $cookies, usersFactory, questionsFactory, $location) {

  var getQuestion = function(){
    var url = $location.path();
    questionsFactory.showAnswerForm(url, function(returnedData){
      $scope.question = returnedData.success;
    });
  };

  getQuestion();

  $scope.user = $cookies.getAll();
  $scope.answer = {};

  $scope.createAnswer = function(){
      $scope.error = "";
      $scope.answer._user = $scope.user._user;
      $scope.answer._question = $scope.question._id;
      $scope.answer.likes = 0;
      var answerObj = $scope.answer;
      var questionId = $scope.question._id;
      questionsFactory.createAnswer(answerObj, questionId, function(returned_data){
        if (returned_data.err){
          $scope.error = "Your Question must be at least 8 characters long"
        } else {
          $scope.answer = {};
          $location.url('/dashboard')
        };
      }); // end createAnswer process
  }; // End createAnswer

  $scope.logout = function(){
    $cookies.remove('_user');
    $cookies.remove('username');
    $location.url('/');
  }; // End logout

}]);
