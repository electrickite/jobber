import { test } from 'qunit';
import moduleForAcceptance from 'jobber-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | job show');

test('showing the job posting page', function(assert) {
  visit('/job/67237');

  andThen(function() {
    assert.equal(currentPath(), 'job', "showing the job posting page");
    assert.equal(currentURL(), '/job/67237', "URL is correct");
    assert.equal(find('h1').text().replace(/\s/g,''), 'Secretary-OMFSOfficeAssociate', "job page is rendered");
  });
});

test('linking to job page from job index', function(assert) {
  visit('/');
  fillIn('#text-filter', 'OMFS');
  click('#all-jobs tbody tr:first td:first a');

  andThen(function() {
    assert.equal(currentPath(), 'job', "showing the job posting page");
    assert.equal(find('h1').text().replace(/\s/g,''), 'Secretary-OMFSOfficeAssociate', "job page is rendered after link");
  });
});
