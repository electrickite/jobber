import { test } from 'qunit';
import moduleForAcceptance from 'jobber-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | job index');

test('showing the index page', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('#all-jobs').length, 1, "job table is present");
    assert.equal(currentPath(), 'index', "showing the index page");
    assert.equal(currentURL(), '/', "URL is correct");
    assert.equal(find('#all-jobs tbody tr.job-fields').length, 138, "all jobs are shown");
  });
});


test('sorting job list', function(assert) {
  visit('/');
  click('#all-jobs thead tr th:first');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr:first td:first').text(), 'Academic Advisor', "title sorts ascending correctly");
  });

  click('#all-jobs thead tr th:first');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr:first td:first').text(), 'Vehicle Operator 2', "title sorts descending correctly");
  });

  click('#all-jobs thead tr th:nth-child(2)');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr:first td:nth-child(2)').text(), 'Academic Advisor', "working title sorts ascending correctly");
  });

  click('#all-jobs thead tr th:nth-child(2)');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr:first td:nth-child(2)').text(), 'Water Quality Lab Research Aid', "working title sorts descending correctly");
  });

  click('#all-jobs thead tr th:nth-child(3)');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr:first td:nth-child(3)').text(), 'Ackerman Road', "department sorts ascending correctly");
  });

  click('#all-jobs thead tr th:nth-child(3)');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr:first td:nth-child(3)').text(), 'WCA-Ticket Services', "department sorts descending correctly");
  });

  click('#all-jobs thead tr th:nth-child(4)');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr:first td:nth-child(4)').text(), '12/15/2015', "end date sorts ascending correctly");
  });

  click('#all-jobs thead tr th:nth-child(4)');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr:first td:nth-child(4)').text(), '05/01/2016', "end date sorts descending correctly");
  });

  click('#all-jobs thead tr th:nth-child(5)');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr:first td:nth-child(5)').text(), '', "location sorts ascending correctly");
  });

  click('#all-jobs thead tr th:nth-child(5)');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr:first td:nth-child(5)').text(), 'Wooster', "location sorts descending correctly");
  });
});


test('filtering job list', function(assert) {
  visit('/');
  click('#filters-heading a');
  fillIn('#text-filter', 'design');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr.job-fields').length, 4, "only text filtered jobs are shown");
  });

  fillIn('#text-filter', '');
  fillIn('#title-filter', 'Asst Director of Development');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr.job-fields').length, 3, "only title filtered jobs are shown");
  });

  fillIn('#title-filter', '');
  fillIn('#department-filter', 'OARnet');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr.job-fields').length, 2, "only department filtered jobs are shown");
  });

  fillIn('#department-filter', '');
  fillIn('#location-filter', 'Wooster');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr.job-fields').length, 4, "only location filtered jobs are shown");
  });

  fillIn('#department-filter', 'FAES IT');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr.job-fields').length, 1, "multiple filters are additive");
  });
});


test('index after deep linking', function(assert) {
  visit('/job/67237');
  click('nav li a[href="/"]');

  andThen(function() {
    assert.equal(find('#all-jobs tbody tr.job-fields').length, 138, "all jobs loaded after deep linking");
  });
});
