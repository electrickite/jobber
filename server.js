var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    fetch = require('./services/fetch');

// Routing
app.get('/jobs', function(req, res) {
  fetch.allJobs().then(function(jobs) {
    res.json({
      jobs: jobs
    });
  })
});

app.get('/jobs/:id', function(req, res) {
  fetch.job(req.params.id).then(function(job) {
    res.json({
      job: job
    });
  })
});

// Create server
server.listen(3000, function() {
  console.log('Listening on port:', 3000);
});
