// require mongoose and dependents
var mongoose = require('mongoose'),
    Schema = mongoose.Schema

// Set schema
var CommentSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  content: {type: String,},
  }, {timestamps: true});

module.exports = mongoose.model('Comment', CommentSchema);
