// require mongoose and dependents
var mongoose = require('mongoose'),
    Schema = mongoose.Schema

// Set schema
var QuestionSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  question: {type: String,
             required: true,
             minlength: 10},
  description: {type: String,},
  _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
  }, {timestamps: true});

module.exports = mongoose.model('Question', QuestionSchema);
