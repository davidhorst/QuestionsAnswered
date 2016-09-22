// require mongoose and dependents
var mongoose = require('mongoose'),
    Schema = mongoose.Schema

// Set schema
var MessageSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  content: {type: String,},
  _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  }, {timestamps: true});

module.exports = mongoose.model('Message', MessageSchema);
