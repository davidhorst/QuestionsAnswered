// require mongoose and dependents
var mongoose = require('mongoose'),
    Schema = mongoose.Schema

// Set schema
var AnswerSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},
  answer: {type: String,
           required: true,
           minlength: 8},
  details: {type: String,},
  likes: {type: Number},
  }, {timestamps: true});

module.exports = mongoose.model('Answer', AnswerSchema);
