var Promise = require('bluebird'),
    request = Promise.promisifyAll(require('request'), {multiArgs: true}),
    cheerio = require('cheerio'),
    settings = {};


var JobUpdateService = function(opts) {
  var opts = opts || {};

  settings.feedUrl = opts.feedUrl || 'https://www.jobsatosu.com/all_jobs.atom';
  settings.timeout = opts.timeout || 10 * 1000;

  return JobUpdateService;
};


JobUpdateService.execute = function(opts, callback) {
  return request.getAsync({
    timeout: settings.timeout,
    url: settings.feedUrl,
  }).spread(function (res, body) {
    var $ = cheerio.load(body, {xmlMode:true}),
        jobUrls = [];

    $('feed entry link').each(function() {
      jobUrls.push($(this).attr('href'));
    });

    return jobUrls;
  });
};


exports = module.exports = JobUpdateService();
