var http = require('http'),
  express = require('express'),
  app = express(),
  bodyparser = require('body-parser'),
  cors = require('cors'),
  port = 9001,
  messages = [
  {
    message: 'Hey brother', 
    user: 'Jason', 
    timestamp: new Date()
  }, 
  {message: 'Her?', user: 'Jason', timestamp: new Date()}, {message: 'I made a huge mistake', user: 'Jason', timestamp: new Date()}, {message: 'Chaw chee chaw chee chaw', user: 'Jason', timestamp: new Date()}, {message: 'There is always money in the banana stand', user: 'Jason', timestamp: new Date()}, {message: 'Quit essing around', user: 'Jason', timestamp: new Date()}, {message: 'I\'m a monster!', user: 'Jason', timestamp: new Date()}];

app.listen(9001);

app.use(bodyparser.json());
app.use(cors());

app.get('/', function(req, res) {
  res.json(messages);
});

app.post('/', function(req, res) {
  var newMessage = req.body;
  console.log(newMessage.timestamp);
  messages.push( {
    message: newMessage["message"],
    user: newMessage["user"],
    timestamp: new Date(),
  })
  res.json(messages);
})

