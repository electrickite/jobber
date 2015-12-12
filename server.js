var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    updater = require('./services/update.js');

app.get('/', function(req, res) {
  updater.execute().then(function(urls) {
    res.json(urls);
  });
});

server.listen(3000, function() {
  console.log('Listening on port:', 3000);
});
