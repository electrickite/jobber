import Ember from 'ember';

export default Ember.Component.extend({
  sortProp: null,
  sortAscending: true,
  sortDef: [],
  filterText: '',
  filterFields: Ember.A(['title', 'department', 'location', 'end']),

  filteredContent: Ember.computed.filter('content', function(job) {
    var match = false,
        filter = this.get('filterText');

    this.get('filterFields').forEach(function(field) {
      var value = job.get(field);

      if (value && value.toString().slice(0, filter.length) === filter) {
        match = true;
      }
    });

    return match;
  }).property('content', 'filterText'),

  sortedContent: Ember.computed.sort('filteredContent', 'sortDef'),

  // Template helpers
  sortedOnTitle: (function() {
    return this.get('sortProp') === 'title';
  }).property("sortProp"),

  sortedOnWorkingTitle: (function() {
    return this.get('sortProp') === 'working_title';
  }).property("sortProp"),

  sortedOnDepartment: (function() {
    return this.get('sortProp') === 'department';
  }).property("sortProp"),

  sortedOnLocation: (function() {
    return this.get('sortProp') === 'location';
  }).property("sortProp"),

  sortedOnEnd: (function() {
    return this.get('sortProp') === 'end';
  }).property("sortProp"),


  actions: {
    sort(prop) {
      if (this.get('sortProp') === prop) {
        this.toggleProperty('sortAscending');
      } else {
        this.set('sortProp', prop);
        this.set('sortAscending', true);
      }

      var direction = this.get('sortAscending') ? 'asc' : 'desc';
      this.set('sortDef', [prop + ':' + direction]);
    }
  }
});
