// require mongoose and dependents
var mongoose = require('mongoose'),
    Schema = mongoose.Schema

// Set schema
var UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "An username is required"],
    unique: true,
    },
  }, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);
