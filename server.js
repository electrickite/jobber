var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    fetch = require('./services/fetch');

app.use(express.static('public'));


// Routing
app.get('/api/jobs', function(req, res) {
  fetch.allJobs().then(function(jobs) {
    res.json({
      jobs: jobs
    });
  // }).catch(function (err) {
  //   console.log('Error fetching all jobs', err.message);
  //   res.status(502).json({
  //     message: 'Error retrieving jobs'
  //   });
  });
});

app.get('/api/jobs/:id', function(req, res) {
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


// Catch all. Send client front controller
app.get('*', function(req, res) {
  res.sendFile('public/index.html', {root: __dirname});
});


// Handle 404 errors
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }
  res.status(404).json({message: err.message || 'Not found'});
});

// Handle other errors
app.use(function(err, req, res, next) {
  console.log(err, req);
  res.status(500).json({message: 'Internal server error'});
});


// Create server
server.listen(3000, function() {
  console.log('Listening on port:', 3000);
});
