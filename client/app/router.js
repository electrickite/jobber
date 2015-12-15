import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('job', { path:'/job/:job_id' });
  this.route('charts');
});

export default Router;
