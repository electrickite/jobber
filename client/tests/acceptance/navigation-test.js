import { test } from 'qunit';
import moduleForAcceptance from 'jobber-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navigation');

test('navbar is present', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.navbar .navbar-header').length, 1, "page nav is present");
  });
});

test('linking to the salary page from the index page', function(assert) {
  visit('/');
  click('nav li a[href="/salary"]');

  andThen(function() {
    assert.equal(currentURL(), '/salary', "user navigates to the salary page");
  });
});

test('linking to the index page from the salary page', function(assert) {
  visit('/salary');
  click('nav li a[href="/"]');

  andThen(function() {
    assert.equal(currentURL(), '/', "user navigates to the index page");
  });
});
