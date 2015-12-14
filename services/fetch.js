var Promise = require('bluebird'),
    request = Promise.promisifyAll(require('request'), {multiArgs: true}),
    cheerio = require('cheerio'),
    cache = require('../lib/cache'),
    settings = {};


var JobFetchService = function(opts) {
  var opts = opts || {};

  settings.feedUrl = opts.feedUrl || 'https://www.jobsatosu.com/all_jobs.atom';
  settings.postingUrlBase = opts.postingUrlBase || 'https://www.jobsatosu.com/postings/';
  settings.timeout = opts.timeout || 10 * 1000;
  settings.ttl = opts.ttl || 120 * 60 * 1000;

  return JobFetchService;
};


JobFetchService.allJobs = function() {
  return cache.wrap('jobs-all', fetchAllJobs(), settings.ttl);
};

JobFetchService.job = function(id) {
  return cache.wrap('jobs-'+id, fetchJob(id), settings.ttl);
};


function fetchAllJobs() {
  return request.getAsync({
    timeout: settings.timeout,
    url: settings.feedUrl
  }).spread(function (res, body) {
    var $ = cheerio.load(body, {xmlMode:true}),
        jobs = [];

    $('feed entry id').each(function() {
      jobs.push(JobFetchService.job($(this).text()));
    });

    return Promise.all(jobs);
  });
}


function fetchJob(id) {
  return request.getAsync({
    timeout: settings.timeout,
    url: settings.postingUrlBase + id,
  }).spread(function (res, body) {
    var $ = cheerio.load(body);
        $table = $(".form_container table").first(),
        job = {};

    job.id = getIdFromUrl(res.request.uri.href);
    job.link = res.request.uri.href;
    job.top_message = getRowValue($table, 'Top Message');
    job.applicant_message = getRowValue($table, 'Message to Applicants');
    job.positions = parseInt(getRowValue($table, 'Number of Positions Available'));
    job.title = getRowValue($table, 'University Title');
    job.working_title = getRowValue($table, 'Working Title');
    job.department = getRowValue($table, 'Department');
    job.location = getRowValue($table, 'Department Location');
    job.requisition = parseInt(getRowValue($table, 'Requisition Number'));
    job.summary = getRowValue($table, 'Summary of Duties');
    job.additional = getRowValue($table, 'Additional Information for Applicants');
    job.screening = getRowValue($table, 'Pre Employment Screening');
    job.required = getRowValue($table, 'Required Qualifications');
    job.desired = getRowValue($table, 'Desired Qualifications');
    job.salary = getRowValue($table, 'Target Salary');
    job.time = getRowValue($table, 'Full/Part Time');
    job.duration = getRowValue($table, 'Temporary or Regular');
    job.start = getRowValue($table, 'Posting Start Date');
    job.end = getRowValue($table, 'Posting End Date');
    job.contact_name = getRowValue($table, 'Dept Contact Name');
    job.contact_phone = getRowValue($table, 'Dept Contact Phone');

    return job;
  });
}


function getRowValue($table, label) {
  return $table.find("th:contains('" + label + "')").siblings('td').text();
}

function getIdFromUrl(url) {
  var n = url.lastIndexOf('/');
  return parseInt(url.substring(n + 1));
}

exports = module.exports = JobFetchService();
