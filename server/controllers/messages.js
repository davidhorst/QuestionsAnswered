//  require mongoose
var mongoose = require('mongoose');
// require models
var User = mongoose.model('User'),
    Message = mongoose.model('Message'),
    Comment = mongoose.model('Comment');

function MessagesController(){

  this.index = function(req, res){
    Message.find({})
      .populate('_user')
      .populate({
        path: '_comments',
        model: 'Comment',
        populate: {
          path: '_user',
          model: 'User'
        }
      })
      .exec(function(err, users){
        if ( err ){
          res.json({err: err, success: null});
        } else {
          res.json({err: null, success: users});
        };
    });
  }; //End this.index

  this.createMessage = function(req, res){
    Message.create(req.body, function(err, message){
      if ( err ){
        res.json({err: err, success: null});
      } else {
        res.json({err: null, success: message});
      };
    });
  }; // End createMessage

  this.createComment = function(req, res){
    Message.findOne({_id: req.params.id }, function(err, message){
      Comment.create(req.body, function(err, comment){
        if ( err ){
          res.json({err: err, success: null});
        } else {
          console.log(message);
          message._comments.push(comment._id);
          message.save(function(err, success){
            if ( err ) {
              res.json({err: err, succss: null});
            } else {
              res.json({err: null, success: true});
            }
          }); // end message save process
        }; // start message save process
      }); // end comment create process
    }); // end find message process
  }; // End createMessage

}; // End MessagesController

module.exports = new MessagesController();
