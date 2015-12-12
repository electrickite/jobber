var Promise = require('bluebird'),
    request = Promise.promisifyAll(require('request'), {multiArgs: true}),
    cheerio = require('cheerio');

var JobUpdateService = function() {
  return JobUpdateService;
};

JobUpdateService.execute = function(opts, callback) {
  return request.getAsync({
    timeout: 10 * 1000,
    url: 'https://www.jobsatosu.com/all_jobs.atom',
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
