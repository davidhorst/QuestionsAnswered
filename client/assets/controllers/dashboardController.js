app.controller('dashboardController', ['$scope','$cookies','usersFactory', 'messagesFactory', '$location', function($scope, $cookies, usersFactory, messagesFactory, $location) {

  $scope.user = $cookies.getAll();
  $scope.username = $scope.user.username
  $scope.message = {};
  $scope.comment = [];

  var getMessages = function(){
    messagesFactory.index(function(returned_data){
      if (returned_data.err){
        $scope.errors = err;
      } else {
        $scope.messages = returned_data.success;
        console.log(returned_data.success)
      };
    })
  }; // reusable function to refresh messages scope

  getMessages();
  $scope.createMessage = function(){
      var userid = $scope.user._user;
      messagesFactory.createMessage({_user: userid, content: $scope.message.content}, function(returned_data){
        //check for errors in returned data, then:
        $scope.message = {};
        getMessages();
      });
  }; // End createMessage

  $scope.createComment = function(msgID, index){
      var userid = $scope.user._user;
      commentObj = {_user: userid,
         content: $scope.comment[index]};
      messagesFactory.createComment(commentObj, msgID, function(returned_data){
        //check for errors in returned data, then:
        getMessages();
      });
  }; // End createComment

  $scope.logout = function(){
    $cookies.remove('_user');
    $cookies.remove('username');
    $location.url('/');

  }; // End logout

}]);
