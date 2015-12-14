import DS from 'ember-data';

export default DS.Model.extend({
  link: DS.attr('string'),
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
  salary: DS.attr('string'),
  time: DS.attr('string'),
  duration: DS.attr('string'),
  start: DS.attr('string'),
  end: DS.attr('string'),
  contact_name: DS.attr('string'),
  contact_phone: DS.attr('string')
});
