app.factory('messagesFactory', ['$http', function($http) {

  function MessagesFactory(){
    var _this = this;

    this.index = function(callback){
      $http.get('/messages').then(function(returned_data){
        callback(returned_data.data);
      });
    }; // End this.index

    this.createMessage = function(messageObj, callback){
      $http.post('/messages', messageObj).then(function(returned_data){
        callback(returned_data.data);
      });
    }; // End createMessage

    this.createComment = function(commentObj, msgID, callback){
      $http.post(`/messages/${msgID}`, commentObj).then(function(returned_data){
        callback(returned_data.data);
      });
    }; // End createMessage
  }; // End MessagesFactory

  return new MessagesFactory();

}]);
