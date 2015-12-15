import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from 'jobber-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | job index');

test('showing the salary visualization page', function(assert) {
  var promise = $.Deferred();
  visit('/salary');

  andThen(function() {
    assert.equal(currentPath(), 'salary', "showing the salary page");
    assert.equal(currentURL(), '/salary', "URL is correct");

    Ember.run.later(function(){
      assert.equal(find('#vis svg').length, 1, "visualization has rendered");
      promise.resolve();
    }, 1000);
  });
});

test('running the salary visualization', function(assert) {
  var promise = $.Deferred();
  visit('/salary');

  andThen(function() {
    Ember.run.later(function(){
      assert.equal(find('#vis svg circle').length, 138, "visualization has correct number of nodes");
      promise.resolve();
    }, 1000);
  });
});
