import Ember from 'ember';

export default Ember.Controller.extend({
  jobColumns: Ember.A([
    {
      'key': 'title',
      'displayName': 'Title'
    },
    {
      'key': 'department',
      'displayName': 'Department'
    },
    {
      'key': 'location',
      'displayName': 'Location'
    },
    {
      'key': 'end',
      'displayName': 'End Date'
    }
  ])
});
