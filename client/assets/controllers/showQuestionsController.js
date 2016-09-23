app.controller('showQuestionController', ['$scope','$cookies','usersFactory', 'questionsFactory', '$location', function($scope, $cookies, usersFactory, questionsFactory, $location) {

  $scope.user = $cookies.getAll();

  var getQuestion = function(){
    var url = $location.path();
    questionsFactory.showQuestion(url, function(returnedData){
      $scope.question = returnedData.success;
    });
  };

  getQuestion();

  $scope.likeAnswer = function(answerId){
    questionsFactory.likeAnswer(answerId, function(returned_data){
      if (returned_data.err){
        console.log(returned_data.err);
      };
      getQuestion();
    });
  }; // End likeQuestion

  $scope.logout = function(){
    $cookies.remove('_user');
    $cookies.remove('username');
    $location.url('/');

  }; // End logout

}]);
