app.factory('questionsFactory', ['$http', function($http) {

  function QuestionsFactory(){
    var _this = this;

    this.index = function(callback){
      $http.get('/questions').then(function(returned_data){
        callback(returned_data.data);
      });
    }; // End this.index

    this.createQuestion = function(questionObj, callback){
      $http.post('/questions', questionObj).then(function(returned_data){
        callback(returned_data.data);
      });
    }; // End createQuestion

    this.createAnswer = function(answerObj, questionID, callback){
      $http.post(`/questions/${questionID}`, answerObj).then(function(returned_data){
        callback(returned_data.data);
      });
    }; // End createAnswer

    this.likeAnswer = function(answerId, callback){
        $http.post(`/answers/${ answerId }`).then(function(returned_data){
          callback(returned_data.data);
        });
    }; // End likeAnswer

    this.showQuestion = function(url, callback){
      $http.get(url).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    }; // End showQuestion

    this.showAnswerForm = function(url, callback){
      $http.get(url).then(function(returned_data){
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    }; // End showAnswerForm

  }; // End AnswersFactory

  return new QuestionsFactory();

}]);
