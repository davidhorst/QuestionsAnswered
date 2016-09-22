app.factory('usersFactory', ['$http', function($http) {

  function UsersFactory(){
    var _this = this;

    this.index = function(callback){
      $http.get('/users').then(function(returned_data){
        callback(returned_data.data);
      });
    }; // End this.index

    this.login = function(userObj, callback){
      $http.post('/login', userObj).then(function(returned_data){
        callback(returned_data.data);
      });
    }; // End this.login

  }; // End UsersFactory

  return new UsersFactory();

}]);
