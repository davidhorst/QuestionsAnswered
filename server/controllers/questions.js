//  require mongoose
var mongoose = require('mongoose');
// require models
var User = mongoose.model('User'),
    Question = mongoose.model('Question'),
    Answer = mongoose.model('Answer');

function QuestionsController(){

  this.index = function(req, res){
    Question.find({})
      .populate('_user')
      .exec(function(err, questions){
        if ( err ){
          res.json({err: err, success: null});
        } else {
          res.json({err: null, success: questions});
        };
    });// End find process
  }; //End this.index

  this.createQuestion = function(req, res){
    Question.create(req.body, function(err, question){
      if ( err ){
        res.json({err: err, success: null});
      } else {
        res.json({err: null, success: question});
      };
    }); // End create process
  }; // End this.createMessage

  this.createAnswer = function(req, res){
    Question.findOne({_id: req.params.id }, function(err, question){
      var answer = new Answer(req.body);
      answer._question = question._id;
      answer.save(function(err, success){
        if (err) {
          res.json({err: err, success: null});
        } else {
          question._answers.push(answer._id);
          question.save(function(err, success){
            if (err){
              res.json({err: err, success: null});
            } else {
              res.json({err: null, success: success});
            }; // end question save error catch
          }); //end question save
        };// end answer save error catch
      }); // end answer save
    }); // end find question process
  }; // End createAnswer

  this.showQuestion = function(req, res){
    Question.findById(req.params.id)
      .populate('_user')
      .populate({
        path: '_answers',
        model: 'Answer',
        populate: {
          path: '_user',
          model: 'User'
        }
      })
      .exec(function(err, question) {
        if (err) {
          res.json({err: err, success: null})
        } else {
          res.json({err: null, success: question});
        }

      });
  }; // End this.show

  this.likeAnswer = function(req, res){
    Answer.findOne({_id: req.params.id }, function(err, answer){
      if (!answer){
        res.json({ err: 'answer not found', success: null });
      } else if (err) {
        res.json({err: err, success: null});
      } else {
        var likes = answer.likes;
        if (!likes) { likes = 0 };
        likes += 1
        answer.likes = likes;
        answer.save(function(err, success){
          if (err){
            res.json({err: err, success: null});
          } else {
            res.json({err: null, success: success});
          };
        }); // end answer save
      } // end answer not found catch
    }); // end find answer process
  }; // End createAnswer


}; // End QuestionsController

module.exports = new QuestionsController();
