//  require mongoose
var mongoose = require('mongoose');
// require models
var User = mongoose.model('User')

function AccountsController(){

  this.index = function(req, res){
    User.find({}, function(err, users){
      if ( err ){
        res.json({err: err, success: null});
      } else {
        res.json({err: null, success: users});
      };
    });
  }; //End this.index

  this.login = function(req, res){
    // req.body === user object
    User.findOne( req.body , function(err, user){
      if ( err ) {
        // error on find
        res.json({err: err, success: null});
      } else {
        if (!user) {
        // find success - no user found
            User.create(req.body, function(err, user){
              if (err){
                // user creation failed, return error
                res.json({err: err, success: null});
              } else {
                // user creation successful, return user
                res.json({err: null, success: user});
              };
            });
        } else {
          // user found
          res.json({err: null, success: user});
        };
      };
    });
  }; // End this.login

}; // End AccountsController

module.exports = new AccountsController();
