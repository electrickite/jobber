import Ember from 'ember';

export default Ember.Component.extend({
  sortProp: null,
  sortAscending: true,
  sortDef: [],
  filterText: '',
  filterFields: Ember.A(['title', 'working_title', 'department', 'location', 'end']),

  filteredContent: Ember.computed.filter('content', function(job) {
    var matches = 0,
        numFilters = 1,
        filter = this.get('filterText');

    this.get('filterFields').some(function(field) {
      var value = job.get(field);

      if (value && value.toString().toLowerCase().indexOf(filter.toLowerCase()) > -1) {
        matches++;
        return true;
      }
    });

    if (this.get('filterTitle')) {
      numFilters++;
      if (this.get('filterTitle') === job.get('title')) {matches++;}
    }

    if (this.get('filterDepartment')) {
      numFilters++;
      if (this.get('filterDepartment') === job.get('department')) {matches++;}
    }

    if (this.get('filterLocation')) {
      numFilters++;
      if (this.get('filterLocation') === job.get('location')) {matches++;}
    }

    return matches === numFilters;
  }).property('content', 'filterText', 'filterTitle', 'filterDepartment', 'filterLocation'),

  sortedContent: Ember.computed.sort('filteredContent', 'sortDef'),

  filterTitle: null,
  titles: Ember.computed.mapBy('content', 'title'),
  uniqueTitles: Ember.computed.uniq('titles'),

  filterDepartment: null,
  departments: Ember.computed.mapBy('content', 'department'),
  uniqueDepartments: Ember.computed.uniq('departments'),

  filterLocation: null,
  locations: Ember.computed.mapBy('content', 'location'),
  uniqueLocations: Ember.computed.uniq('locations'),


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
    },

    selectTitle(title) {
      this.set('filterTitle', title);
    },

    selectDepartment(department) {
      this.set('filterDepartment', department);
    },

    selectLocation(location) {
      this.set('filterLocation', location);
    }
  }
});
