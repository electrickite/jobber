var _ = require('lodash');
var allJobs = require('../fixtures/all-jobs');

/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var jobsRouter = express.Router();

  jobsRouter.get('/', function(req, res) {
    res.send({ 'jobs': allJobs });
  });

  jobsRouter.get('/:id', function(req, res) {
    var id = Number(req.params.id);
    var job = _.findWhere(allJobs, { id: id });

    res.send({ 'job': job });
  });

  app.use('/api/jobs', jobsRouter);
};
