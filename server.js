var express = require('express'),
    app = express(),
    server = require('http').Server(app);

app.get('/', function(req, res) {
  res.json({message: 'up and running'});
});

server.listen(3000, function() {
  console.log('Listening on port:', 3000);
});
