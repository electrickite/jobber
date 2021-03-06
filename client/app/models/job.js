import Ember from 'ember';
import DS from 'ember-data';
const {computed} = Ember;

export default DS.Model.extend({
  link: DS.attr('string'),
  apply_link: DS.attr('string'),
  top_message: DS.attr('string'),
  applicant_message: DS.attr('string'),
  positions: DS.attr('number'),
  title: DS.attr('string'),
  working_title: DS.attr('string'),
  department: DS.attr('string'),
  location: DS.attr('string'),
  requisition: DS.attr('number'),
  summary: DS.attr('string'),
  additional: DS.attr('string'),
  screening: DS.attr('string'),
  required: DS.attr('string'),
  desired: DS.attr('string'),
  fte: DS.attr('string'),
  category: DS.attr('string'),
  salary: DS.attr('string'),
  salary_low: DS.attr('number'),
  salary_high: DS.attr('number'),
  salary_average: DS.attr('number'),
  time: DS.attr('string'),
  duration: DS.attr('string'),
  start: DS.attr('date'),
  end: DS.attr('date'),
  contact_name: DS.attr('string'),
  contact_phone: DS.attr('string'),

  ftePercent: computed('fte', function() {
    return this.get('fte') * 100;
  }),
});
