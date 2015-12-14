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
  }).catch(function (err) {
    console.log('Error fetching all jobs', err.message);
    res.status(502).json({
      message: 'Error retrieving jobs'
    });
  });
});

app.get('/jobs/:id', function(req, res) {
  fetch.job(req.params.id).then(function(job) {
    res.json({
      job: job
    });
  }).catch(function (err) {
    console.log('Error fetching job', err.message);
    res.status(404).json({
      message: 'Job not found'
    });
  });
});

// Create server
server.listen(3000, function() {
  console.log('Listening on port:', 3000);
});
