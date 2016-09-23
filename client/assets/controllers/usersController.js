app.controller('usersController', ['$scope','$cookies','usersFactory', '$location', function($scope, $cookies, usersFactory, $location) {

  var getUsers = function(){
    usersFactory.index(function(returned_data){
      if (returned_data.err){
        $scope.errors = err;
      } else {
        $scope.users = returned_data.success;
      };
    })
  }; // reusable function to refresh users scope

  getUsers();

  this.delete = function(id){

  }; //end this.delete





}]);
