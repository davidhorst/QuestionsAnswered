// require controllers
var accounts = require('./../controllers/accounts.js'),
    messages = require('./../controllers/messages.js');

// define routes
module.exports = function(app){
  // Acounts Routes
  app.get('/users', accounts.index);
  app.post('/login', accounts.login);
  // Dashboard Routes
  app.get('/messages', messages.index);
  app.post('/messages', messages.createMessage);
  app.post('/messages/:id', messages.createComment);
};
